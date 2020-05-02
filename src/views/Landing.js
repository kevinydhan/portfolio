import React, { memo, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme, ButtonLink, IconContainer } from '@theme'
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

const {
    fontSizes,
    heightNavbar,
    paddingTopFullPageXs,
    paddingBottomFullPageXs,
    breakpointSm,
    breakpointMd,
    breakpointLg,
    breakpointXl,
    transitionNavbar,
} = theme

// =============================================================================

const Section = styled('section')`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    padding: calc(${heightNavbar} + ${paddingTopFullPageXs}) 0
        ${paddingBottomFullPageXs};

    @media only screen and (min-width: ${breakpointSm}) and (orientation: landscape) {
        height: auto;
    }

    @media only screen and (min-width: ${breakpointMd}) {
        padding: 0;
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

    @media only screen and (min-width: ${breakpointMd}) {
        max-width: 28rem;
    }

    @media only screen and (min-width: ${breakpointXl}) {
        max-width: 33rem;
    }
`

// =============================================================================

const AdCopy = styled('p')`
    margin: 1rem 0 0;
    font-size: ${fontSizes['+0.5']};

    @media only screen and (min-width: ${breakpointMd}) {
        max-width: 28rem;
        margin: 0.75rem 0 0;
    }

    @media only screen and (min-width: ${breakpointXl}) {
        max-width: 33rem;
    }
`

// =============================================================================

const CTAContainer = styled('div')`
    margin: 5rem 0 0;

    @media only screen and (min-width: ${breakpointSm}) and (orientation: landscape) {
        display: flex;
        justify-content: center;
        margin: 6rem 0 0;
    }

    @media only screen and (min-width: ${breakpointMd}) and (orientation: portrait) {
        display: flex;
        margin: 6rem 0 0;
    }

    @media only screen and (min-width: ${breakpointMd}) and (orientation: landscape) {
        justify-content: flex-start;
    }

    @media only screen and (min-width: ${breakpointLg}) {
        margin: 6rem 0 0;
    }

    @media only screen and (min-width: ${breakpointXl}) {
        margin: 7rem 0 0;
    }
`

// =============================================================================

const iconLinkAdditionalStyles = ({ isIconContainerHidden }) => css`
    padding: 2rem 0 0;

    @media only screen and (min-width: ${breakpointMd}) {
        position: absolute;
        right: 0;
        bottom: 2rem;
        z-index: 1;
        margin: 0;
        padding: 0;
        transform: ${isIconContainerHidden
            ? 'translateY(5rem)'
            : 'translateX(0)'};
        opacity: ${isIconContainerHidden ? 0 : 1};
        transition: transform ${transitionNavbar}, opacity ${transitionNavbar};

        a + a {
            margin: 0 0 0 1.25rem;
        }

        svg {
            width: 2rem;
        }
    }
`

// =============================================================================

export default memo(Landing)
