import { WrapRootElementBrowserArgs } from 'gatsby'
import React, { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import { ScrollContextProvider } from '$components'
import { GlobalStyles, theme } from '$theme'

export const wrapRootElement = ({
  element,
}: WrapRootElementBrowserArgs): ReactElement => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <ScrollContextProvider>{element}</ScrollContextProvider>
  </ThemeProvider>
)
