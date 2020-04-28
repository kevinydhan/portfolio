import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Keyframes as KF, ButtonLink } from '@theme'
import { landing } from '@data/site.yml'

const Landing = (props) => {
    const ref = useRef()
    const { observeElement } = props

    console.log('Landing component re-rendered.')

    useEffect(() => {
        if (ref.current) observeElement(ref.current)
    }, [observeElement])

    return (
        <Section ref={ref}>
            <div>
                <Heading>{landing.heading}</Heading>
                <AdCopy>{landing.adCopy}</AdCopy>

                <CTAContainer>
                    {landing.cta.map((button) => {
                        const { text, ...buttonProps } = button

                        return (
                            <ButtonLink key={text} {...buttonProps}>
                                {text}
                            </ButtonLink>
                        )
                    })}
                </CTAContainer>
            </div>
        </Section>
    )
}

Landing.propTypes = {
    observeElement: PropTypes.func.isRequired,
}

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
    animation: ${KF.slide} 500ms linear 1 forwards;

    @media screen and (min-width: 1440px) {
        font-size: 52px;
    }
`

// =============================================================================

const AdCopy = styled('p')`
    transform: translateY(-30px);
    opacity: 0;
    animation: ${KF.slide} 500ms linear 500ms 1 forwards;

    @media only screen and (min-width: 1440px) {
        max-width: 560px;
        margin-top: 0.75em;
        font-size: 24px;
        line-height: 1.6;
    }
`

// =============================================================================

const CTAContainer = styled('div')`
    > a {
        opacity: 0;
    }

    > a:nth-child(1) {
        animation: ${KF.slide} 500ms linear 1000ms 1 forwards;
    }

    > a:nth-child(2) {
        animation: ${KF.slide} 500ms linear 1100ms 1 forwards;
    }

    @media only screen and (min-width: 1440px) {
        display: flex;
        margin-top: 7em;
    }
`

// =============================================================================

export default Landing
