import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import theme from './theme'

const handleButtonLinkVariants = (props) => {
    const { colors } = theme

    // Chooses default color if no color is specified.
    const color = colors[props.color] ? colors[props.color] : colors['heading']

    const filled =
        props.variant === 'filled'
            ? `
            position: relative;

            &::before {
                position: absolute;
                z-index: -999;

                height: calc(100% - 4px);
                width: calc(100% - 4px);

                content: '';

                background-color: rgba(${color}, 1);
                transition: background 150ms ease;
            }

            &:hover,
            &:active {
                color: rgba(${colors.heading}, 0.6);

                &::before {
                    background-color: rgba(${color}, 0.6);
                }
            }`
            : ``

    return css`
        border: 2px solid rgba(${color}, 1);
        transition: color 150ms ease, border 150ms ease;

        &:hover,
        &:active {
            color: rgba(${color}, 0.6);
            border: 2px solid rgba(${color}, 0.6);
        }

        ${filled}
    `
}

/**
 * @param {string} [props.variant="outline"] - Button variation
 * @param {string} [props.color="blue"] - Button color
 * @param {string} props.href - Button link url/route
 */
const ButtonLink = styled('a')`
    /* Box model styles */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;

    /* Typography styles */
    font-size: 18px;
    text-align: center;
    text-transform: uppercase;

    /* Misc. styles */
    cursor: pointer;

    @media only screen and (min-width: 768px) {
        width: 280px;
        height: 72px;
        font-size: 20px;
    }

    @media only screen and (min-width: 1024px) {
        width: 300px;
        height: 78px;
        font-size: 22px;
    }

    ${handleButtonLinkVariants}
`

ButtonLink.defaultProps = {
    color: 'heading',
}

ButtonLink.propTypes = {
    color: PropTypes.string,
    children: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
}

export default ButtonLink
