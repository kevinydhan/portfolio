import { css } from 'styled-components'

/**
 * Defines the pseudo-element styles for `Root`.
 */
export const rootPseudoElements = (props) => {
    return css`
        &::before,
        &::after {
            content: '';
            position: absolute;

            width: 5px;
            height: 60px;

            background: ${(props) => props.theme.colors.primary};

            transition: opacity 250ms ease;

            ${(props) => {
                const { isLandingVisible } = props
                return isLandingVisible
                    ? `
                opacity: 1;`
                    : `
                opacity: 0;`
            }}
        }

        &::before {
            bottom: 100%;
        }

        &::after {
            top: 100%;
        }
    `
}
