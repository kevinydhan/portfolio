import React from 'react'
import { Head, Navbar } from '@components'
import { GlobalStyle } from '@theme'
import { Landing, Projects } from '@views'

const Main = () => {
    return (
        <>
            <Head />
            <GlobalStyle />
            <Navbar />
            <Landing />
            <Projects />
        </>
    )
}

// window.addEventListener('DOMContentLoaded', () => {
//     const metaTags = document.querySelectorAll('meta')
//     metaTags.forEach((tag) => {
//         if (tag.dataset && tag.dataset.reactHelmet) {
//             tag.removeAttribute('data-react-helmet')
//         }
//     })
// })

export default Main
