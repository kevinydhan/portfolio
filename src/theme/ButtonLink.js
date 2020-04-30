import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from '@theme'

const ButtonLink = styled('a')`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 14px 0;
    font-size: 14px;
    border: 2px solid
        ${({ variant }) =>
            variant === 'outlined'
                ? `rgba(${theme.colorHeading}, 1)`
                : `rgba(${theme.colorPrimary}, 1)`};
    transition: color ${theme.transitionButtonLink},
        background ${theme.transitionButtonLink};

    & + & {
        margin: 1.25em 0 0;
    }

    &::before {
        position: absolute;
        z-index: -1;
        width: calc(100% - 6px);
        height: calc(100% - 6px);
        background: ${({ variant }) =>
            variant === 'outlined'
                ? `rgba(${theme.colorBackground}, 1)`
                : `rgba(${theme.colorPrimary}, 1)`};
        transition: opacity ${theme.transitionButtonLink};
        content: '';
    }

    &:hover,
    &:active {
        color: ${({ variant }) =>
            variant === 'outlined'
                ? `rgba(${theme.colorText}, 0.75)`
                : `rgba(${theme.colorText}, 0.75)`};
        background: ${({ variant }) =>
            variant === 'outlined'
                ? `rgba(${theme.colorBackground}, 0.6)`
                : `rgba(${theme.colorPrimary}, 0.6)`};

        &::before {
            opacity: 0.6;
        }
    }

    @media only screen and (min-width: 768px) {
        width: auto;
        padding: 14px 20px;
        font-size: 16px;

        & + & {
            margin: 0 0 0 2.75em;
        }
    }

    @media only screen and (min-width: 1024px) {
        padding: 14px 20px;
        font-size: 16px;
    }

    @media only screen and (min-width: 1366px) {
        padding: 14px 20px;
        font-size: 17px;
    }

    @media only screen and (min-width: 1600px) {
        padding: 16px 22px;
        font-size: 17px;
    }
`

ButtonLink.defaultProps = {
    variant: 'outlined',
}

ButtonLink.propTypes = {
    variant: PropTypes.string,
}

export default ButtonLink
