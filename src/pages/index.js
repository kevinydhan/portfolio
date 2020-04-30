import React, { useRef, useReducer } from 'react'
import { Landing, Projects } from '@views'
import { Head, Background, Navbar } from '@components'
import styled from 'styled-components'
import { GlobalStyle } from '@theme'
import { useQuery, useObserver } from '@utils'
import { backgroundActionClassNames as bgac } from '@data/classnames'

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

    return (
        <>
            <Head ogImgSrc={ogImageSrc} />
            <GlobalStyle />
            <Navbar mainContentRef={mainContentRef} />
            <Background state={backgroundState} />
            <MainContent ref={mainContentRef}>
                <Landing observeElement={observeElement} />
                <Projects observeElement={observeElement} projects={projects} />
            </MainContent>
        </>
    )
}

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
 * Defines the initial state for the local reducer. This state manages which
 * color gets displayed in the background based on the current view that is
 * being displayed.
 */
const initialState = {
    stripeColor: stripeColors.default,
    opacityDefault: 0,
    opacityYellow: 0,
    opacityLightBlue: 0,
    opacityRed: 0,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TO_DEFAULT:
            return {
                ...initialState,
                stripeColor: stripeColors.default,
                opacityDefault: 1,
            }

        case CHANGE_TO_LIGHTBLUE:
            return {
                ...initialState,
                stripeColor: stripeColors.lightblue,
                opacityLightBlue: 1,
            }

        case CHANGE_TO_YELLOW:
            return {
                ...initialState,
                stripeColor: stripeColors.yellow,
                opacityYellow: 1,
            }

        case CHANGE_TO_RED:
            return {
                ...initialState,
                stripeColor: stripeColors.red,
                opacityRed: 1,
            }

        default:
            console.warn(`${action.type} is not a valid action type.`)
            return state
    }
}

const MainContent = styled('main')`
    position: relative;
`

export default Main
