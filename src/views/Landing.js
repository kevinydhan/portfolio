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
    /* Fills the remaining space of the screen, taking into account the
       navigation bar's height.  */
    height: calc(100% - ${heights.navbar.sm});

    /* Offsets the entire landing page's content down. */
    padding: 36px 16px 0;

    /* Ensures the watermark background container positions itself relative to
       this element. */
    position: relative;

    width: 100vw;
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
    margin-top: 80px;

    a + a {
        margin-top: 20px;
    }
`

export default Landing
