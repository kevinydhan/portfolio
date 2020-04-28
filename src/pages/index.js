import React from 'react'
import { Landing, Projects } from '@views'
import { Head, Background, Navbar } from '@components'
import styled from 'styled-components'
import { GlobalStyle } from '@theme'
import { useQuery, useObserver } from '@utils'

const Main = () => {
    const { ogImage, projectImageSrc } = useQuery()
    const { observeElement } = useObserver()

    return (
        <>
            <Head ogImgSrc={ogImage} />
            <GlobalStyle />
            <Navbar />
            <Background
            // backgroundColor={backgroundColor}
            // opacities={opacities}
            />

            <MainContent>
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
