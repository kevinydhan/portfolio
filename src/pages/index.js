import React from 'react'
import { Landing, Projects } from '@views'
import { Head, Navbar } from '@components'
import { GlobalStyle } from '@theme'

const Main = () => {
    return (
        <>
            <Head />
            <GlobalStyle />
            <Navbar />
            <Landing />
            {/* <Projects /> */}
        </>
    )
}

export default Main
