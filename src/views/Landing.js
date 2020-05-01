import React, { memo, useState, useRef, useEffect } from 'react'
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

const Landing = ({ observeElement, visualState }) => {
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
                additionalStyles={iconLinkAdditionalStyles(visualState)}
            />
        </Section>
    )
}

Landing.propTypes = {
    observeElement: PropTypes.func.isRequired,
    visualState: PropTypes.exact({
        isIconContainerHidden: PropTypes.bool.isRequired,
    }).isRequired,
}

// =============================================================================

const { breakpointMd, breakpointLg, breakpointXl, transitionNavbar } = theme

// =============================================================================

const Section = styled('section')`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;

    @media only screen and (max-width: ${breakpointMd}) and (orientation: landscape) {
        height: auto;
        padding: 7rem 0;
    }

    @media only screen and (min-width: ${breakpointMd}) {
        /* min-height: 768px; */
    }

    @media only screen and (min-width: ${breakpointLg}) {
        /* min-height: 576px; */
    }

    @media only screen and (min-width: ${breakpointXl}) {
        /* min-height: 768px; */
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
    margin: 0.5rem 0 0;
    transform: translateY(-1.875rem);
    opacity: 0;
    animation: ${KF.slide} 500ms linear 500ms 1 forwards;

    @media only screen and (min-width: ${breakpointMd}) {
        max-width: 31.25rem;
        margin: 0.75rem 0 0;
    }

    @media only screen and (min-width: ${breakpointXl}) {
        max-width: 35rem;
    }
`

// =============================================================================

const CTAContainer = styled('div')`
    margin: 37.5rem 0 0;

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
        margin: 6rem 0 0;
    }

    @media only screen and (min-width: 1024px) {
        margin: 6rem 0 0;
    }

    @media only screen and (min-width: 1366px) {
        margin: 7rem 0 0;
    }
`

// =============================================================================

const iconLinkAdditionalStyles = ({ isIconContainerHidden }) => css`
    transform: ${isIconContainerHidden ? 'translateY(5rem)' : 'translateX(0)'};
    opacity: ${isIconContainerHidden ? 0 : 1};
    transition: transform ${transitionNavbar}, opacity ${transitionNavbar};

    svg {
        width: 1.75rem;
    }

    @media only screen and (max-width: ${breakpointMd}) and (orientation: landscape) {
        padding: 2.25rem 0 0;

        svg {
            width: 1.875rem;
        }
    }

    @media only screen and (min-width: ${breakpointMd}) {
        position: absolute;
        right: 0;
        bottom: 1.5rem;
        z-index: 1;

        a + a {
            margin: 0 0 0 1.25rem;
        }
    }
`

// =============================================================================

export default memo(Landing)
