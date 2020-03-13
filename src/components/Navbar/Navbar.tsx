import React from 'react'
import {
    Root,
    NavContainer,
    Logo,
    NavList,
    NavListItem,
    NavLink,
} from './Navbar.styled'
import navLinks from '../../data/nav-links'

/**
 * @interface
 * Defines the React props accepted by the `Navbar` component.
 */
export interface NavbarProps {
    isTransparent: boolean
}

/**
 * Renders a navigation bar.
 *
 * @returns {React.ReactElement} - Navigation bar element
 */
function Navbar(props: NavbarProps): React.ReactElement {
    const { isTransparent } = props

    return (
        <Root isTransparent={isTransparent}>
            <NavContainer>
                <Logo role="presentation">kevin han</Logo>
                <NavList>
                    {navLinks.map(
                        (link): React.ReactElement => (
                            <NavListItem key={link.id}>
                                <NavLink href={link.href}>{link.name}</NavLink>
                            </NavListItem>
                        )
                    )}
                </NavList>
            </NavContainer>
        </Root>
    )
}

Navbar.defaultProps = {
    isLandingIntersecting: false,
}

export default Navbar
