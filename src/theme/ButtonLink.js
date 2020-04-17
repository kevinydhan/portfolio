import React from 'react'
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
                background-color: rgba(${color}, 1);
                content: '';
                height: calc(100% - 4px);
                position: absolute;
                width: calc(100% - 4px);
                z-index: -999;
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

        &:hover,
        &:active {
            border: 2px solid rgba(${color}, 0.6);
            color: rgba(${color}, 0.6);
        }

        @media only screen and (min-width: 768px) {
            font-size: 22px;
            height: 82px;
            width: 280px;
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
    align-items: center;
    cursor: pointer;
    display: flex;
    font-size: 18px;
    height: 60px;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;
    width: 100%;

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
