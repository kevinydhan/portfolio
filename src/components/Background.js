import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// =============================================================================

const Background = ({ state }) => {
    return (
        <BackgroundContainer>
            <SVG viewBox="0 0 1366 768" xmlns="http://www.w3.org/2000/svg">
                <Trapezoid
                    className="yellow-trapezoid"
                    d="M930 768L502 0H1366V768H930Z"
                    fill="url(#background-trapezoid-yellow)"
                    fillOpacity="0.07"
                    opacity={state.opacityYellow}
                />
                <Trapezoid
                    className="lightblue-trapezoid"
                    d="M930 768L502 0H1366V768H930Z"
                    fill="url(#background-trapezoid-lightblue)"
                    fillOpacity="0.1"
                    opacity={state.opacityLightBlue}
                />
                <Trapezoid
                    className="red-trapezoid"
                    d="M930 768L502 0H1366V768H930Z"
                    fill="url(#background-trapezoid-red)"
                    fillOpacity="0.12"
                    opacity={state.opacityRed}
                />
                <Trapezoid
                    className="default-trapezoid"
                    d="M930 768L502 0H1366V768H930Z"
                    fill="url(#background-trapezoid-default)"
                    opacity={state.opacityDefault}
                />
                <Stripe
                    d="M444 0L872 768H922L494 0H444Z"
                    fill={state.stripeColor}
                />
                <defs>
                    <linearGradient
                        id="background-trapezoid-yellow"
                        x1="757.5"
                        y1="450.5"
                        x2="1409"
                        y2="109.5"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.159462" stopColor="#EAFF19" />
                        <stop offset="1" />
                    </linearGradient>
                    <linearGradient
                        id="background-trapezoid-lightblue"
                        x1="757.5"
                        y1="450.5"
                        x2="1409"
                        y2="109.5"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.159462" stopColor="#0D88FF" />
                        <stop offset="1" />
                    </linearGradient>
                    <linearGradient
                        id="background-trapezoid-red"
                        x1="757.5"
                        y1="450.5"
                        x2="1409"
                        y2="109.5"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.159462" stopColor="#B34409" />
                        <stop offset="1" />
                    </linearGradient>
                    <linearGradient
                        id="background-trapezoid-default"
                        x1="757.5"
                        y1="450.5"
                        x2="1409"
                        y2="109.5"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.159462" stopColor="#010027" />
                        <stop offset="1" />
                    </linearGradient>
                </defs>
            </SVG>
        </BackgroundContainer>
    )
}

Background.propTypes = {
    state: PropTypes.exact({
        stripeColor: PropTypes.string.isRequired,
        opacityDefault: PropTypes.number.isRequired,
        opacityYellow: PropTypes.number.isRequired,
        opacityLightBlue: PropTypes.number.isRequired,
        opacityRed: PropTypes.number.isRequired,
    }).isRequired,
}

// =============================================================================

const BackgroundContainer = styled('div')`
    position: fixed;
    top: 0;
    left: 0;
    z-index: -999;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`

// =============================================================================

const SVG = styled('svg')`
    position: absolute;

    @media only screen and (orientation: portrait) {
        height: 100%;
    }

    @media only screen and (orientation: landscape) and (min-aspect-ratio: 16/9) {
        width: 100vw;
    }

    @media only screen and (orientation: landscape) and (max-aspect-ratio: 16/9) {
        width: calc((16 * 100vh / 9) + 1px);
    }
`

// =============================================================================

const Stripe = styled('path')`
    transition: fill 250ms linear;
`

// =============================================================================

const Trapezoid = styled('path')`
    transition: opacity 250ms linear;
`

// =============================================================================

export default Background
