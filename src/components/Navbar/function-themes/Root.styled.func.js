import { css } from 'styled-components'

/**
 * Is a `styled-components` function theme.
 *
 * @param {ThemeStyledProps<RootProps, DefaultTheme>} props - Props
 *
 * @returns {string} - CSS style block
 */
const isTransparent = (props) => {
    const { isTransparent } = props

    return isTransparent
        ? `
        background-color: transparent;`
        : `
        background-color: rgba(5, 5, 5, 0.5);
        box-shadow: 0px 10px 30px rgba(57, 56, 61, 0.205);`
}

const mediaQueries = {
    /**
     * Defines the media query between the `xs` and `sm` breakpoints.
     *
     * @example
     * `@media only screen and (min-width: 0px) and (max-width: 480px) {`
     *    // ...
     * `}`
     */
    betweenXSandSM: (props) => {
        const { xs, sm } = props.theme.dimensions.breakpoints
        return css`
            @media only screen and (min-width: ${xs}px) and (max-width: ${sm}px) {
                background: rgba(255, 255, 255, 0.95);
                border-bottom: 1px solid lightgrey;
            }
        `
    },
    /**
     * Defines the media query between the `xs` and `md` breakpoints.
     *
     * @example
     * `@media only screen and (min-width: 0px) and (max-width: 768px) {`
     *    // ...
     * `}`
     */
    betweenXSAndMD: (props) => {
        const { xs, md } = props.theme.dimensions.breakpoints
        return css`
            @media only screen and (min-width: ${xs}px) and (max-width: ${md}px) {
                padding: 0 48px;
                font-size: 17px;
            }
        `
    },
    /**
     * Defines the media query between the `md` and `lg` breakpoints.
     *
     * @example
     * `@media only screen and (min-width: 768px) and (max-width: 992px) {`
     *    // ...
     * `}`
     */
    upMD: (props) => {
        const { md } = props.theme.dimensions.breakpoints
        return css`
            @media only screen and (min-width: ${md}px) {
                font-size: 19px;
            }
        `
    },
}

export default {
    mediaQueries,
    isTransparent,
}
