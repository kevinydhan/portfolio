import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './GlobalStyle'
import theme from '../../styles/theme'

// Views
import Landing from '../../views/Landing/Landing'

// Components
import Navbar from '../Navbar/Navbar'

const App: React.FC = (): React.ReactElement => {
    /**
     * This state is used to manage whether or not the landing section is
     * intersecting. The state is used to toggle the navigation bar's CSS
     * properties.
     */
    const [isLandingIntersecting, setIsLandingIntersecting] = useState(true)
    const handleScroll: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
            setIsLandingIntersecting(entry.isIntersecting)
        })
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Navbar isTransparent={isLandingIntersecting} />
            <Landing handleScroll={handleScroll} />
        </ThemeProvider>
    )
}

export default App
