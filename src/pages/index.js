import React from 'react'
import { Head } from '@components'
import { GlobalStyle } from '@theme'
import { Landing } from '@views'

const Main = () => {
    return (
        <>
            <Head />
            <GlobalStyle />
            <Landing />
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
