import React, { useState } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import * as data from './data/data'

const App: React.FC = (): React.ReactElement => {
    const [projects, setProjects] = useState(data.projects)

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <div>Hello world</div>
        </ThemeProvider>
    )
}

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        scroll-behavior: smooth;
        font-family: "Bai Jamjuree", sans-serif;
    }

    body {
        background: rgba(${({ theme }) => theme.colors.light}, 0.95);
    }

    a {
        text-decoration: none;
        color: black;
    }

    #app {
        position: relative;

        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export default App
