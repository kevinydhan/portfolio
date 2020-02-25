import styled, { css, DefaultTheme, StyledComponent } from 'styled-components'

/**
 * @todo - Modify `background-color` to accept theme color
 */
export const Root: StyledComponent<
    'header',
    DefaultTheme,
    { backgroundColor: string },
    never
> = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;

    width: 100vw;
    height: 4.25em;

    display: flex;
    align-items: center;

    background-color: transparent;

    ${props => css`
        @media only screen and (min-width: 600px) {
            justify-content: center;
        }
    `}
`

export const NavContainer = styled.nav`
    width: 100%;
    height: 100%;
    max-width: 1024px;

    display: flex;
    justify-content: space-between;
`

export const NavList = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1;

    width: 100%;

    list-style: none;

    ${({ theme: { dimensions } }) => css`
        @media only screen and (min-width: ${dimensions.breakpoints.tablet}px) {
            position: relative;
            top: unset;
            left: unset;
            z-index: unset;

            height: 100%;
            width: 400px;

            display: flex;
            justify-content: space-between;

            border-bottom: unset;
        }
    `}
`

export const NavListItem = styled.li`
    padding: 1em;

    display: flex;
    align-items: center;

    ${({ theme: { colors, dimensions } }) => css`
        @media only screen and (min-width: ${dimensions.breakpoints.tablet}px) {
            position: relative;

            padding: 0;

            height: 100%;

            justify-content: center;

            &::after {
                content: '';

                position: absolute;
                left: 0;
                bottom: 0;

                width: 100%;
                height: 5px;

                background-color: rgba(${colors.primary}, 1);

                transform: scaleX(0);
                transform-origin: right;
                transition: transform 150ms ease-in-out;
            }

            &:hover,
            &:focus,
            &:focus-within {
                &::after {
                    transform: scaleX(1);
                    transform-origin: left;
                }
            }
        }
    `}
`

export const NavLink = styled.a`
    font-size: 1.175rem;
    cursor: pointer;

    &:hover {
        color: rgba(${({ theme: { colors } }) => colors.primary}, 1);
    }
`
