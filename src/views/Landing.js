import React from 'react'
import styled, { css } from 'styled-components'
import { theme, WatermarkBackground, ButtonLink } from '@theme'
import { generateKey } from '@utils'
import content from '@content/landing.yml'

const Landing = () => {
    return (
        <Section>
            <WatermarkBackgroundContainer>
                <WatermarkBackground />
            </WatermarkBackgroundContainer>
            <Heading>
                I am a <Keyword>full-stack developer</Keyword> based in New
                Jersey, USA.
            </Heading>
            <Heading>
                I build <Keyword>websites</Keyword> and{' '}
                <Keyword>web applications</Keyword>.
            </Heading>

            <CTAContainer>
                {content.cta.map((cta, i) => (
                    <ButtonLink key={generateKey(cta.text, i)} {...cta}>
                        {cta.text}
                    </ButtonLink>
                ))}
            </CTAContainer>
        </Section>
    )
}

const { colors, dimensions } = theme
const { heights } = dimensions

const Section = styled('section')`
    display: flex;
    flex-direction: column;

    /* Fills the remaining space of the screen, taking into account the
       navigation bar's height.  */
    height: calc(100vh - ${heights.navbar.sm});

    justify-content: center;

    /* Offsets the entire landing page's content down. */
    padding: 0 16px;

    /* Ensures the watermark background container positions itself relative to
       this element. */
    position: relative;

    width: 100vw;

    @media only screen and (min-width: 320px) {
        padding-bottom: 7.8vw;
    }

    @media only screen and (min-width: 375px) {
        padding-bottom: 9.6vw;
    }

    @media only screen and (min-width: 414px) {
        padding-bottom: 14.8vw;
    }
`

const WatermarkBackgroundContainer = styled('div')`
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -999;

    /* Targets the SVG background image. */
    > svg {
        width: 100vw;
    }
`

const Heading = styled('h1')`
    font-size: 24px;
    font-weight: 400;

    & + & {
        /* Defines the space between each heading. */
        margin-top: 24px;
    }

    @media only screen and (min-width: 375px) {
        font-size: 31px;
    }

    @media only screen and (min-width: 768px) {
        font-size: 42px;
    }

    @media only screen and (min-width: 1024px) {
        font-size: 50px;
    }
`

const Keyword = styled('b')`
    color: rgba(${colors.lightblue}, 1);
    font-weight: 400;
`

const CTAContainer = styled('div')`
    display: flex;
    flex-direction: column;

    /* Defines the default top margin at screen widths lower than 320px. */
    margin-top: 80px;

    a + a {
        /* Defines the spacing between each 'ButtonLink' component within the
           container. */
        margin-top: 20px;
    }

    @media only screen and (min-width: 320px) {
        /* Sets a dynamic and consistent separation between the landing view's
           headings and the call-to-action buttons. */
        margin-top: 21.3vw;
    }
`

export default Landing
