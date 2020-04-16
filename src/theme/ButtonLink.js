import styled, { css } from 'styled-components'
import theme from './theme'

const { colors } = theme

/**
 * @param {string} [props.variant="outline"] - Button variation
 * @param {string} [props.color="blue"] - Button color
 * @param {string} props.href - Button link url/route
 */
const ButtonLink = styled('a')`
    align-items: center;
    cursor: pointer;
    display: flex;
    font-size: 18px;
    height: 60px;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;
    width: 100%;

    /* This styled function assigns the appropriate CSS properties based on
       'props.color'. */
    ${(props) => {
        // Assigns a default color if no color is specified.
        const color = colors[props.color]
            ? colors[props.color]
            : colors['heading']

        return css`
            border: 2px solid rgba(${color}, 1);
        `
    }}

    ${(props) => {
        // Assigns a default color if no color is specified.
        const color = colors[props.color]
            ? colors[props.color]
            : colors['heading']
        if (props.variant === 'filled') {
            return css`
                position: relative;

                &::before {
                    background-color: rgba(${color}, 1);
                    content: '';
                    height: calc(100% - 4px);
                    position: absolute;
                    width: calc(100% - 4px);
                    z-index: -999;
                }
            `
        } else return ``
    }}
`

export default ButtonLink
