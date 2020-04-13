import { css } from 'styled-components'

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
}
