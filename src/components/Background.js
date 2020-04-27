import React from 'react'
import styled from 'styled-components'

const Background = () => {
    return (
        <BackgroundContainer>
            <SVG viewBox="0 0 1366 768" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M937 768L509 0H1366V768H937Z"
                    fill="url(#background-trapezoid-yellow)"
                    fillOpacity="0.07"
                    opacity="0"
                />
                <path
                    d="M937 768L509 0H1366V768H937Z"
                    fill="url(#background-trapezoid-lightblue)"
                    fillOpacity="0.1"
                    opacity="0"
                />
                <path
                    d="M937 768L509 0H1366V768H937Z"
                    fill="url(#background-trapezoid-red)"
                    fillOpacity="0.12"
                    opacity="0"
                />
                <path
                    d="M937 768L509 0H1366V768H937Z"
                    fill="url(#background-trapezoid-midnightblue)"
                    opacity="1"
                />
                <path d="M451 0L879 768H929L501 0H451Z" fill="#010027" />
                <defs>
                    <linearGradient
                        id="background-trapezoid-yellow"
                        x1="764.5"
                        y1="450.5"
                        x2="1416"
                        y2="109.5"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.159462" stopColor="#EAFF19" />
                        <stop offset="1" />
                    </linearGradient>
                    <linearGradient
                        id="background-trapezoid-lightblue"
                        x1="764.5"
                        y1="450.5"
                        x2="1416"
                        y2="109.5"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.159462" stopColor="#0D88FF" />
                        <stop offset="1" />
                    </linearGradient>
                    <linearGradient
                        id="background-trapezoid-red"
                        x1="764.5"
                        y1="450.5"
                        x2="1416"
                        y2="109.5"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.159462" stopColor="#B34409" />
                        <stop offset="1" />
                    </linearGradient>
                    <linearGradient
                        id="background-trapezoid-midnightblue"
                        x1="764.5"
                        y1="450.5"
                        x2="1416"
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

export default Background
