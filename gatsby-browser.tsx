import React, { ReactElement } from 'react'
import { WrapRootElementBrowserArgs } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyles } from '$theme'

export const wrapRootElement = ({
  element,
}: WrapRootElementBrowserArgs): ReactElement => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
)
