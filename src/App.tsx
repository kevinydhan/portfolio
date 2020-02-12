import React, { useState } from 'react'
import { createGlobalStyle } from 'styled-components'

const App: React.FC = (): React.ReactElement => {
    return (
        <>
            <GlobalStyle />
            <div>Hello world</div>
        </>
    )
}

const GlobalStyle = createGlobalStyle`
    :root {
        --color-primary: 32, 5, 137;
        --color-secondary: 125, 18, 255;
        --color-accent: 34, 34, 34;
        --color-dark: 0, 0, 0;
        --color-light: 253, 253, 253;
    }

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
        background: rgba(var(--color-light), 0.95);
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
