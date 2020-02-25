import React from 'react'
import {
    Root,
    NavContainer,
    NavList,
    NavListItem,
    NavLink
} from './Navbar.styled'

export interface INavbarProps {
    isLandingIntersecting: boolean
}

/**
 * Renders a navigation bar.
 *
 * @returns {React.ReactElement}
 */
const Navbar = (props: INavbarProps): React.ReactElement => {
    const backgroundColor: string = props.isLandingIntersecting
        ? 'transparent'
        : 'white'

    return (
        <Root backgroundColor={{ backgroundColor }}>
            <NavContainer>
                {/* Logo here */}
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
