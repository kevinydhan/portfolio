// React modules
import React from 'react'

// Styling modules
import styled from 'styled-components'
import { theme, WatermarkBackground, ButtonLink } from '@theme'

// Misc. modules
import content from '@content/landing.yml'
import { generateKey } from '@utils'

// =============================================================================

const Landing = () => {
    return (
        <Section>
            <WatermarkBackground />
            <Heading>
                I am a <Keyword>full-stack developer</Keyword> based in New
                Jersey, USA.
            </Heading>
            <Heading>
                I help others by building <Keyword>functional websites</Keyword>{' '}
                and <Keyword>web applications</Keyword>.
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

// =============================================================================

/**
 *
 * @param {*} text
 * @param {*} keywords
 *
 * @returns {Array<string | JSX.Element>} - Array of text split
 */
const highlightKeywords = (text, keywords) => {}

// =============================================================================

const { colors, dimensions } = theme
const { heights } = dimensions

// =============================================================================

const Section = styled('section')`
    /* Positional styles */
    position: relative;

    /* Box model styles */
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    max-width: 1440px;

    /* Fills the remaining space of the screen, taking into account the
       navigation bar's height.  */
    min-height: calc(100vh - ${heights.navbar.sm});
    padding: 0 24px;

    /* Visual styles */
    /* border-right: 1px solid white;
    border-left: 1px solid white; */

    /* Targets the SVG background image. */
    > svg {
        position: absolute;
        top: 0;
        right: 0;
        width: 100vw;
        max-width: 699px;
    }

    @media only screen and (min-width: 768px) {
        > svg {
            right: 24px;
        }
    }
`

// =============================================================================

const Heading = styled('h1')`
    /* Limits the amount of horizontal space the heading takes up at larger
        viewport widths. */
    max-width: 950px;
    font-weight: 400;
    font-size: 25px;

    & + & {
        /* Defines the space between each heading. */
        margin-top: 24px;
    }

    @media only screen and (min-width: 320px) {
        &:first-of-type {
            margin-top: 20px;
        }
    }

    @media only screen and (min-width: 375px) {
        font-size: 30px;

        &:first-of-type {
            margin-top: 30px;
        }
    }

    @media only screen and (min-height: 768px) {
        &:first-of-type {
            margin-top: 0;
        }
    }

    @media only screen and (min-width: 667px) {
        font-size: 36px;
    }

    @media only screen and (min-width: 768px) {
        font-size: 42px;

        & + & {
            margin-top: 32px;
        }
    }

    @media only screen and (min-width: 1024px) {
        font-size: 48px;

        & + & {
            margin-top: 48px;
        }
    }
`

// =============================================================================

const Keyword = styled('b')`
    color: rgba(${colors.lightblue}, 1);
    font-weight: 400;
`

// =============================================================================

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

    @media only screen and (min-width: 768px) {
        /* Changes the display orientation of the call-to-action buttons from
           top-to-bottom to left-to-right at larger viewport sizes. */
        flex-direction: row;

        a + a {
            /* Resets the top margin set at smaller viewport sizes and applies
               a left margin. */
            margin: 0 0 0 52px;
        }
    }

    @media only screen and (min-width: 1024px) {
        margin-top: 10vw;
    }
`

// =============================================================================

export default Landing
