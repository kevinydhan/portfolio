import React from 'react'
import ReactDOM from 'react-dom'

import { ThemeProvider } from 'styled-components'
import theme from './theme'

import App from './App'

const { defaultTheme, GlobalStyle } = theme

ReactDOM.render(
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <App />
    </ThemeProvider>,
    document.getElementById('app')
)
