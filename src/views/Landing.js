import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { CSSMixins as CMx, Keyframes as KF, ButtonLink } from '@theme'
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
    ${CMx.fullPage()}
`

// =============================================================================

const Heading = styled('h1')`
    font-weight: 400;
    animation: ${KF.slide} 500ms linear 1 forwards;
`

// =============================================================================

const AdCopy = styled('p')`
    margin: 0.5em 0 0;
    font-size: 18px;
    transform: translateY(-30px);
    opacity: 0;
    animation: ${KF.slide} 500ms linear 500ms 1 forwards;

    @media only screen and (min-width: 768px) {
        max-width: 500px;
        margin: 0.75em 0 0;
    }

    @media only screen and (min-width: 1366px) {
        max-width: 560px;
        font-size: 22px;
        line-height: 1.6;
    }
`

// =============================================================================

const CTAContainer = styled('div')`
    margin: 15vh 0 0;

    > a {
        opacity: 0;
    }

    > a:nth-child(1) {
        animation: ${KF.slide} 500ms linear 1000ms 1 forwards;
    }

    > a:nth-child(2) {
        animation: ${KF.slide} 500ms linear 1250ms 1 forwards;
    }

    @media only screen and (min-width: 768px) {
        display: flex;
        margin: 6em 0 0;
    }

    @media only screen and (min-width: 1024px) {
        margin: 6em 0 0;
    }

    @media only screen and (min-width: 1366px) {
        margin: 7em 0 0;
    }
`

// =============================================================================

export default Landing
