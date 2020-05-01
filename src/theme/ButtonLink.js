import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme } from '@theme'

const {
    colorPrimary,
    colorBackground,
    colorHeading,
    colorText,
    breakpointMd,
    breakpointXl,
    transitionButtonLink,
} = theme

const ButtonLink = styled('a')`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1rem 0;
    border: 0.125rem solid
        ${({ variant }) => {
            return variant === 'outlined'
                ? `rgba(${colorHeading}, 1)`
                : `rgba(${colorPrimary}, 1)`
        }};
    transition: color ${transitionButtonLink},
        border ${transitionButtonLink};

    & + & {
        margin: 1.25rem 0 0;
    }

    &::before {
        position: absolute;
        z-index: -1;
        ${({ variant }) => {
            return variant === 'outlined'
                ? css`
                      width: 100%;
                      height: 100%;
                  `
                : css`
                      width: calc(100% - 0.375rem);
                      height: calc(100% - 0.375rem);
                  `
        }}

        background: ${({ variant }) => {
            return variant === 'outlined'
                ? `rgba(${colorBackground}, 1)`
                : `rgba(${colorPrimary}, 1)`
        }};
        transition: background ${transitionButtonLink};
        content: '';
    }

    &:hover,
    &:active {
        color: ${({ variant }) => {
            return variant === 'outlined'
                ? `rgba(${colorText}, 0.75)`
                : `rgba(${colorText}, 0.75)`
        }};
        border: 0.125rem solid
            ${({ variant }) => {
                return variant === 'outlined'
                    ? `rgba(${colorHeading}, 0.6)`
                    : `rgba(${colorPrimary}, 0.6)`
            }};

        &::before {
            background: ${({ variant }) => {
                return variant === 'outlined'
                    ? `rgba(${colorBackground}, 1)`
                    : `rgba(${colorPrimary}, 0.6)`
            }};
        }
    }

    @media only screen and (min-width: ${breakpointMd}) {
        width: auto;
        padding: 0.875rem 1.25rem;

        & + & {
            margin: 0 0 0 2.75rem;
        }
    }

    @media only screen and (min-width: ${breakpointXl}) {
        padding: 1rem 1.75rem;
    }

`

ButtonLink.defaultProps = {
    variant: 'outlined',
}

ButtonLink.propTypes = {
    variant: PropTypes.string,
}

export default ButtonLink
