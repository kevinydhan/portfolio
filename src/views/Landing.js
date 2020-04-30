import React, { memo, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import {
    theme,
    CSSMixins as CMx,
    Keyframes as KF,
    ButtonLink,
    IconContainer,
} from '@theme'
import { landing, socialLinks } from '@data/site.yml'
import { backgroundActionClassNames as bgac } from '@data/classnames'

// =============================================================================

const Landing = ({ observeElement }) => {
    const ref = useRef()

    useEffect(() => {
        if (ref.current) observeElement(ref.current)
    }, [observeElement])

    return (
        <Section ref={ref} className={bgac.default}>
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

            <IconContainer
                links={socialLinks}
                additionalStyles={iconLinkAdditionalStyles}
            />
        </Section>
    )
}

Landing.propTypes = {
    observeElement: PropTypes.func.isRequired,
}

// =============================================================================

const Section = styled('section')`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;

    @media only screen and (max-width: 768px) and (orientation: landscape) {
        height: auto;
        padding: 7em 0;
    }

    @media only screen and (min-width: 768px) {
        min-height: 768px;
    }

    @media only screen and (min-width: 1024px) {
        min-height: 576px;
    }

    @media only screen and (min-width: 1366px) {
        min-height: 768px;
        margin: 0 auto;
    }
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

const iconLinkAdditionalStyles = css`
    svg {
        width: 28px;
    }

    @media only screen and (max-width: 767px) and (orientation: landscape) {
        padding: 36px 0 0;

        svg {
            width: 30px;
        }
    }

    @media only screen and (min-width: 768px) {
        position: absolute;
        right: 0;
        bottom: 24px;
        z-index: 1;

        a + a {
            margin: 0 0 0 20px;
        }

        svg {
            width: 28px;
        }
    }
`

// =============================================================================

export default memo(Landing)
