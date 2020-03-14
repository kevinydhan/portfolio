import { css } from 'styled-components'

/**
 * @type BreakpointKeys - `{ min: string, max: string }`
 */

export default {
    /**
     * Is a higher-order function that returns a function that is invoked by
     * `styled-components`.
     *
     * @example
     * mediaQueries.between({ min: 'xs', max: 'md' }, `
     *     background: blue;
     * `)
     *
     * `@media only screen and (max-width: 0px) and (min-width: 768px) {
     *     background: blue;
     * }`
     *
     * @param {BreakpointKeys} breakpointKeys - Valid keys for `props.theme.dimensions.breakpoints`
     * @param {string} style - Style block for media query
     */
    between: function(breakpointKeys, style) {
        return (props) => {
            const { dimensions } = props.theme
            const maxWidth = dimensions.breakpoints[breakpointKeys.max]
            const minWidth = dimensions.breakpoints[breakpointKeys.min]

            return css`
                @media only screen and (max-width: ${maxWidth}px) and (min-width: ${minWidth}px) {
                    ${style}
                }
            `
        }
    },
    /**
     * Is a higher-order function that returns a function that is invoked by
     * `styled-components`.
     *
     * @param {*} breakpointKeys - Valid keys for `props.theme.dimensions.breakpoints`
     * @param {*} style - Style block for media query
     */
    up: function(breakpointKeys, style) {
        return (props) => {
            const { dimensions } = props.theme
            const minWidth = dimensions.breakpoints[breakpointKeys.min]

            return css`
                @media only screen and (min-width: ${minWidth}px) {
                    ${style}
                }
            `
        }
    },
}
