import { WrapRootElementBrowserArgs } from 'gatsby'
import React, { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, theme } from '$theme'

export const wrapRootElement = ({
  element,
}: WrapRootElementBrowserArgs): ReactElement => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
)
