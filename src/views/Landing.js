import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { theme } from '@theme'
import { landing } from '@data/site.yml'

const Landing = () => {
    return (
        <Section>
            <div>
                <Heading>{landing.heading}</Heading>
                <AdCopy>{landing.adCopy}</AdCopy>
            </div>
        </Section>
    )
}

// =============================================================================

const slide = keyframes`
    from {
        transform: translateY(-30px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
`

// =============================================================================

const Section = styled('section')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    max-width: 1000px;
    height: 100vh;
    margin: 0 auto;
`

// =============================================================================

const Heading = styled('h1')`
    font-weight: 400;
    animation: ${slide} 500ms linear 1;

    @media screen and (min-width: 1440px) {
        font-size: 48px;
    }
`

// =============================================================================

const AdCopy = styled('p')`
    transform: translateY(-30px);
    opacity: 0;
    animation: ${slide} 500ms linear 500ms 1 forwards;

    @media screen and (min-width: 1440px) {
        max-width: 535px;
        margin-top: 0.5em;
        font-size: 22px;
        line-height: 1.6;
    }
`

// =============================================================================

export default Landing
