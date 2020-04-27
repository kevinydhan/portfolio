import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Landing, Projects } from '@views'
import { Head, Background, Navbar } from '@components'
import styled from 'styled-components'
import { GlobalStyle } from '@theme'

const Main = () => {
    const { ogImage } = useStaticQuery(graphql`
        query getImages {
            ogImage: file(relativePath: { eq: "og.png" }) {
                childImageSharp {
                    fixed(width: 1100, height: 600) {
                        srcWebp
                    }
                }
            }
        }
    `)

    return (
        <>
            <Head ogImgSrc={ogImage.childImageSharp.fixed.srcWebp} />
            <GlobalStyle />
            {/* <Navbar /> */}
            <Background />
            <MainContent>
                <Landing />
                <Projects />
            </MainContent>
        </>
    )
}

const MainContent = styled('main')`
    position: relative;
`

export default Main
