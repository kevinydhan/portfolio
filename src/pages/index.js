import React, { useRef, useReducer, useEffect, useCallback } from 'react'
import { Landing, Projects } from '@views'
import { Head, Background, Navbar } from '@components'
import styled from 'styled-components'
import { theme, GlobalStyle } from '@theme'
import { useQuery, useObserver } from '@utils'
import { backgroundActionClassNames as bgac } from '@data/classnames'
import debounce from 'lodash.debounce'

// =============================================================================

const Main = () => {
    // Fetches data
    const { ogImageSrc, projects } = useQuery()

    // Sets up the creation of the IntersectionObserver
    const observerOptions = useRef({ threshold: 0.4 })

    const handleObserverEvent = useCallback((entries) => {
        entries.forEach(({ isIntersecting, target }) => {
            if (!isIntersecting) return
            if (target.className.includes(bgac.default)) {
                dispatch({ type: CHANGE_BACKGROUND_TO_DEFAULT })
            } else if (target.className.includes(bgac.yellow)) {
                dispatch({ type: CHANGE_BACKGROUND_TO_YELLOW })
            } else if (target.className.includes(bgac.lightblue)) {
                dispatch({ type: CHANGE_BACKGROUND_TO_LIGHTBLUE })
            } else if (target.className.includes(bgac.red)) {
                dispatch({ type: CHANGE_BACKGROUND_TO_RED })
            }
        })
    }, [])

    const { observeElement } = useObserver(
        handleObserverEvent,
        observerOptions.current
    )

    // Sets up the state management system for the page
    const mainContentRef = useRef()
    const [state, dispatch] = useReducer(reducer, initialState)
    const { themeColor, backgroundState, navbarState, landingState } = state

    const handleScroll = useRef(
        debounce(() => {
            const scrollPosition = document.body.getBoundingClientRect().top
            dispatch({
                type: UPDATE_PAGE_SCROLL_POSITION,
                payload: { scrollPosition },
            })
        }, debounceInteral)
    )

    useEffect(() => {
        window.addEventListener('scroll', handleScroll.current)

        return () => {
            const handleScroll = handleScroll.current
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const toggleNavList = () => {
        dispatch({ type: TOGGLE_NAVIGATION_DROPDOWN_MENU })
    }

    const closeNavList = () => {
        dispatch({ type: CLOSE_NAVIGATION_DROPDOWN_MENU })
    }

    return (
        <>
            <Head ogImgSrc={ogImageSrc} />
            <GlobalStyle />
            <Navbar
                mainContentRef={mainContentRef}
                themeColor={themeColor}
                visualState={navbarState}
                toggleNavList={toggleNavList}
                closeNavList={closeNavList}
            />
            <Background state={backgroundState} />
            <MainContent ref={mainContentRef}>
                <Landing
                    observeElement={observeElement}
                    visualState={landingState}
                />
                <Projects observeElement={observeElement} projects={projects} />
            </MainContent>
        </>
    )
}

// =============================================================================

const debounceInteral = 50

// Local reducer action types
const CHANGE_BACKGROUND_TO_DEFAULT = 'CHANGE_BACKGROUND_TO_DEFAULT'
const CHANGE_BACKGROUND_TO_LIGHTBLUE = 'CHANGE_BACKGROUND_TO_LIGHTBLUE'
const CHANGE_BACKGROUND_TO_YELLOW = 'CHANGE_BACKGROUND_TO_YELLOW'
const CHANGE_BACKGROUND_TO_RED = 'CHANGE_BACKGROUND_TO_RED'
const UPDATE_PAGE_SCROLL_POSITION = 'UPDATE_PAGE_SCROLL_POSITION'
const TOGGLE_NAVIGATION_DROPDOWN_MENU = 'TOGGLE_NAVIGATION_DROPDOWN_MENU'
const CLOSE_NAVIGATION_DROPDOWN_MENU = 'CLOSE_NAVIGATION_DROPDOWN_MENU'

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

const initialBackgroundState = {
    stripeColor: stripeColors.default,
    opacityDefault: 0,
    opacityYellow: 0,
    opacityLightBlue: 0,
    opacityRed: 0,
}

const initialNavbarState = {
    isNavbarHidden: false,
    isBackgroundTransparent: true,
    isNavbarDropdownMenuOpen: false,
}

const initialLandingState = {
    isIconContainerHidden: false,
}

/**
 * Defines the initial state for the local reducer. This state manages which
 * color gets displayed in the background based on the current view that is
 * being displayed.
 */
const initialState = {
    themeColor: themeColors.default,
    scrollPosition: 0,
    backgroundState: { ...initialBackgroundState },
    navbarState: { ...initialNavbarState },
    landingState: { ...initialLandingState },
}

// =============================================================================

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_BACKGROUND_TO_DEFAULT:
            return {
                ...state,
                themeColor: themeColors.default,
                backgroundState: {
                    ...initialBackgroundState,
                    stripeColor: stripeColors.default,
                    opacityDefault: 1,
                },
            }

        case CHANGE_BACKGROUND_TO_LIGHTBLUE:
            return {
                ...state,
                themeColor: themeColors.lightblue,
                backgroundState: {
                    ...initialBackgroundState,
                    stripeColor: stripeColors.lightblue,
                    opacityLightBlue: 1,
                },
            }

        case CHANGE_BACKGROUND_TO_YELLOW:
            return {
                ...state,
                themeColor: themeColors.yellow,
                backgroundState: {
                    ...initialBackgroundState,
                    stripeColor: stripeColors.yellow,
                    opacityYellow: 1,
                },
            }

        case CHANGE_BACKGROUND_TO_RED:
            return {
                ...state,
                themeColor: themeColors.red,
                backgroundState: {
                    ...initialBackgroundState,
                    stripeColor: stripeColors.red,
                    opacityRed: 1,
                },
            }

        /**
         * @todo
         * - Fix the arbitrary numbers that are calculated on
         * `window.innerHeight` and `state.scrollPosition`
         */
        case UPDATE_PAGE_SCROLL_POSITION:
            return {
                ...state,
                scrollPosition: action.payload.scrollPosition,
                navbarState: {
                    isNavbarHidden:
                        action.payload.scrollPosition < state.scrollPosition,
                    isBackgroundTransparent:
                        Math.abs(action.payload.scrollPosition) <
                        window.innerHeight / 8,
                    isNavbarDropdownMenuOpen: false,
                },
                landingState: {
                    isIconContainerHidden:
                        action.payload.scrollPosition <
                        state.scrollPosition + 80,
                },
            }

        case TOGGLE_NAVIGATION_DROPDOWN_MENU:
            return {
                ...state,
                navbarState: {
                    ...state.navbarState,
                    isNavbarDropdownMenuOpen: !state.navbarState
                        .isNavbarDropdownMenuOpen,
                },
            }

        case CLOSE_NAVIGATION_DROPDOWN_MENU:
            return {
                ...state,
                navbarState: {
                    ...state.navbarState,
                    isNavbarDropdownMenuOpen: false,
                },
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
`

// =============================================================================

export default Main
