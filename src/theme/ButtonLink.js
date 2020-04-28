import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from '@theme'

const ButtonLink = styled('a')`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 0 5px;
    padding: 16px 22px;
    background: ${({ variant }) =>
        variant === 'outlined'
            ? `rgba(${theme.colorBackground}, 1)`
            : `rgba(${theme.colorPrimary}, 1)`};
    transition: color ${theme.transitionButtonLink},
        background ${theme.transitionButtonLink};

    & + & {
        margin-left: 2.75em;
    }

    &::before {
        position: absolute;
        z-index: -1;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border: 2px solid
            ${({ variant }) =>
                variant === 'outlined'
                    ? `rgba(${theme.colorHeading}, 1)`
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
        padding: 14px 20px;
        font-size: 16px;
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
