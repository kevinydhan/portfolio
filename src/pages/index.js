import React, { useRef, useReducer } from 'react'
import { Landing, Projects } from '@views'
import { Head, Background, Navbar } from '@components'
import styled from 'styled-components'
import { theme, GlobalStyle } from '@theme'
import { useQuery, useObserver } from '@utils'
import { backgroundActionClassNames as bgac } from '@data/classnames'

// =============================================================================

const Main = () => {
    const { ogImageSrc, projects } = useQuery()
    const mainContentRef = useRef()
    const [backgroundState, dispatch] = useReducer(reducer, initialState)

    const { observeElement } = useObserver(
        (entries) => {
            entries.forEach(({ isIntersecting, target }) => {
                if (!isIntersecting) return
                if (target.className.includes(bgac.default)) {
                    dispatch({ type: CHANGE_TO_DEFAULT })
                } else if (target.className.includes(bgac.yellow)) {
                    dispatch({ type: CHANGE_TO_YELLOW })
                } else if (target.className.includes(bgac.lightblue)) {
                    dispatch({ type: CHANGE_TO_LIGHTBLUE })
                } else if (target.className.includes(bgac.red)) {
                    dispatch({ type: CHANGE_TO_RED })
                }
            })
        },
        {
            threshold: 0.625,
        }
    )

    const { themeColor, ...bgState } = backgroundState

    return (
        <>
            <Head ogImgSrc={ogImageSrc} />
            <GlobalStyle />
            <Navbar mainContentRef={mainContentRef} themeColor={themeColor} />
            <Background state={bgState} />
            <MainContent ref={mainContentRef}>
                <Landing observeElement={observeElement} />
                <Projects observeElement={observeElement} projects={projects} />
            </MainContent>
        </>
    )
}

// =============================================================================

// Local reducer action types
const CHANGE_TO_DEFAULT = 'CHANGE_TO_DEFAULT'
const CHANGE_TO_LIGHTBLUE = 'CHANGE_TO_LIGHTBLUE'
const CHANGE_TO_YELLOW = 'CHANGE_TO_YELLOW'
const CHANGE_TO_RED = 'CHANGE_TO_RED'

/**
 * Defines the different colors of the background stripe.
 */
const stripeColors = {
    default: '#010027',
    lightblue: 'rgba(13, 136, 255, 0.1)',
    yellow: 'rgba(234, 255, 25, 0.07)',
    red: 'rgba(179, 68, 9, 0.12)',
}

/**
 * Defines the different theme color keys for the navigation bar. The values
 * correspond to the keys in `'@utils/theme'`.
 */
const themeColors = {
    default: 'colorPrimary',
    lightblue: 'colorLightBlue',
    yellow: 'colorYellow',
    red: 'colorRed',
}

/**
 * Defines the initial state for the local reducer. This state manages which
 * color gets displayed in the background based on the current view that is
 * being displayed.
 */
const initialState = {
    themeColor: themeColors.default,
    stripeColor: stripeColors.default,
    opacityDefault: 0,
    opacityYellow: 0,
    opacityLightBlue: 0,
    opacityRed: 0,
}

// =============================================================================

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TO_DEFAULT:
            return {
                ...initialState,
                themeColor: themeColors.default,
                stripeColor: stripeColors.default,
                opacityDefault: 1,
            }

        case CHANGE_TO_LIGHTBLUE:
            return {
                ...initialState,
                themeColor: themeColors.lightblue,
                stripeColor: stripeColors.lightblue,
                opacityLightBlue: 1,
            }

        case CHANGE_TO_YELLOW:
            return {
                ...initialState,
                themeColor: themeColors.yellow,
                stripeColor: stripeColors.yellow,
                opacityYellow: 1,
            }

        case CHANGE_TO_RED:
            return {
                ...initialState,
                themeColor: themeColors.red,
                stripeColor: stripeColors.red,
                opacityRed: 1,
            }

        default:
            return state
    }
}

// =============================================================================

const MainContent = styled('main')`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: ${theme.maxWidthMain};

    @media only screen and (min-width: ${theme.breakpointXs}) {
        padding: 0 ${theme.paddingSidesMainXs};
    }

    @media only screen and (min-width: ${theme.breakpointSm}) {
        padding: 0 ${theme.paddingSidesMainSm};
    }

    @media only screen and (min-width: ${theme.breakpointMd}) {
        padding: 0 ${theme.paddingSidesMainMd};
    }

    @media only screen and (min-width: ${theme.breakpointLg}) {
        padding: 0 ${theme.paddingSidesMainLg};
    }

    @media only screen and (min-width: ${theme.breakpointXl}) {
        padding: 0;
    }
`

// =============================================================================

export default Main
