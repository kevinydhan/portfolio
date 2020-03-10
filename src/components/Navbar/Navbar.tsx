import React from 'react'
import {
    Root,
    NavContainer,
    Logo,
    NavList,
    NavListItem,
    NavLink,
} from './Navbar.styled'

/**
 * @interface
 * Defines the React props accepted by the `Navbar` component.
 */
export interface NavbarProps {
    isLandingIntersecting: boolean
}

/**
 * @type
 * Defines the navigation link object's properties.
 */
export type NavLink = {
    id: string
    href: string
    name: string
}

/**
 *
 */
const navLinks: Array<NavLink> = [
    { id: 'experience', href: '#experience', name: 'Experience' },
    { id: 'projects', href: '#projects', name: 'Projects' },
    { id: 'resume', href: '#', name: 'Resume' },
    { id: 'contact', href: '#', name: 'Contact' },
]

/**
 * Renders a navigation bar.
 *
 * @returns {React.ReactElement} - Navigation bar element
 */
function Navbar(props: NavbarProps): React.ReactElement {
    const { isLandingIntersecting } = props

    return (
        <Root isLandingIntersecting={isLandingIntersecting}>
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
