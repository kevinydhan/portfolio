import React, { useState } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import theme from './styles/theme'

// Views
import Landing from './views/Landing/Landing'

// Components
import Navbar from './components/Navbar/Navbar'

const App: React.FC = (): React.ReactElement => {
    /**
     * This state is used to manage whether or not the landing section is
     * intersecting. The state is used to toggle the navigation bar's CSS
     * properties.
     */
    const [isLandingIntersecting, setIsLandingIntersecting] = useState(true)

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Navbar isLandingIntersecting={isLandingIntersecting} />
            <Landing setIsLandingIntersecting={setIsLandingIntersecting} />
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
        background: linear-gradient(black, orange);

        height: 200vh;
    }
`

export default App
