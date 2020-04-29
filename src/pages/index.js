import React, { useRef } from 'react'
import { Landing, Projects } from '@views'
import { Head, Background, Navbar } from '@components'
import styled from 'styled-components'
import { GlobalStyle } from '@theme'
import { useQuery, useObserver } from '@utils'

const Main = () => {
    const { ogImage, projectImageSrc } = useQuery()
    const { observeElement } = useObserver()

    const mainContentRef = useRef()

    return (
        <>
            <Head ogImgSrc={ogImage} />
            <GlobalStyle />
            <Navbar mainContentRef={mainContentRef} />
            <Background />
            <MainContent ref={mainContentRef}>
                <Landing observeElement={observeElement} />
                <Projects
                    observeElement={observeElement}
                    projectImageSrc={projectImageSrc}
                />
            </MainContent>
        </>
    )
}

const MainContent = styled('main')`
    position: relative;
`

export default Main
