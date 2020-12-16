import { GatsbyBrowser, WrapRootElementBrowserArgs } from 'gatsby'
import React, { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import { ScrollContextProvider } from '$context'
import { GlobalStyles, theme } from '$theme'

export const wrapRootElement = ({
  element,
}: WrapRootElementBrowserArgs): ReactElement => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <ScrollContextProvider>{element}</ScrollContextProvider>
  </ThemeProvider>
)

export const shouldUpdateScroll: GatsbyBrowser['shouldUpdateScroll'] = ({
  routerProps,
}) => {
  if (routerProps?.location?.hash === '') window.scrollTo(0, 0)
  return false
}
