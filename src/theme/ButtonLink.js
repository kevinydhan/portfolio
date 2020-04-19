import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import theme from './theme'

const { colors, transitions } = theme

const handleButtonLinkVariants = (props) => {
    // Chooses default color if no color is specified.
    const color = colors[props.color] ? colors[props.color] : colors['heading']

    const filled =
        props.variant === 'filled'
            ? `
            &::before {
                z-index: -1;
                height: calc(100% - 4px);
                width: calc(100% - 4px);

                background-color: rgba(${color}, 1);
                transition: background ${transitions.buttons};
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
        transition: color ${transitions.buttons}, border ${transitions.buttons};

        &:hover,
        &:active {
            color: rgba(${color}, 0.6);
            border: 2px solid rgba(${color}, 0.6);
        }

        ${filled}
    `
}

/**
 * xs: 0px
 * sm: 375px
 * md: 768px
 * lg: 1024px
 * xl: 1440px
 */

const width = {
    xs: '100%',
    sm: '100%',
    md: '260px',
    lg: '280px',
    xl: '',
}
const height = {
    xs: '60px',
    sm: '60px',
    md: '68px',
    lg: '70px',
    xl: '',
}
const fontSize = {
    xs: '17px',
    sm: '17px',
    md: '18px',
    lg: '19px',
    xl: '',
}

/**
 * @param {string} [props.variant="outline"] - Button variation
 * @param {string} [props.color="blue"] - Button color
 * @param {string} props.href - Button link url/route
 */
const ButtonLink = styled('a')`
    position: relative;

    /* Box model styles */
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${width.xs};
    height: ${height.xs};

    /* Typography styles */
    font-size: ${fontSize.xs};
    text-align: center;
    text-transform: uppercase;

    /* Visual styles */
    /* background: rgba(${colors.background}, 1); */

    /* Misc. styles */
    cursor: pointer;

    &::before,
    &::after {
        position: absolute;
        z-index: -2;
        content: '';
    }

    &::after {
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(${colors.background}, 1);
    }

    @media only screen and (min-width: 768px) {
        width: ${width.md};
        height: ${height.md};
        font-size: ${fontSize.md};
    }

    @media only screen and (min-width: 1024px) {
        width: ${width.lg};
        height: ${height.lg};
        font-size: ${fontSize.lg};
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
