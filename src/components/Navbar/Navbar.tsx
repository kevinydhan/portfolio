import React from 'react'
import {
    Root,
    NavContainer,
    Logo,
    NavList,
    NavListItem,
    NavLink
} from './Navbar.styled'

export interface INavbarProps {
    isLandingIntersecting: boolean
}

/**
 * Renders a navigation bar. Test
 *
 * @returns {React.ReactElement}
 */
const Navbar = (props: INavbarProps): React.ReactElement => {
    const { isLandingIntersecting } = props

    return (
        <Root isLandingIntersecting={isLandingIntersecting}>
            <NavContainer>
                <Logo role="logo">kevin han</Logo>
                <NavList>
                    {navLinks.map(link => (
                        <NavListItem key={link.id}>
                            <NavLink href={link.href}>{link.name}</NavLink>
                        </NavListItem>
                    ))}
                </NavList>
            </NavContainer>
        </Root>
    )
}

export interface INavLinkObjectLiteral {
    id: string
    href: string
    name: string
}

const navLinks: Array<INavLinkObjectLiteral> = [
    { id: 'experience', href: '#experience', name: 'Experience' },
    { id: 'projects', href: '#projects', name: 'Projects' },
    { id: 'resume', href: '#', name: 'Resume' },
    { id: 'contact', href: '#', name: 'Contact' }
]

export default Navbar
