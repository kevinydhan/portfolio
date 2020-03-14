import React from 'react'
import PropTypes from 'prop-types'
import {
    Root,
    NavContainer,
    NavList,
    NavListItem,
    NavLink,
} from './Navbar.styled'
import navLinks from '../../data/nav-links'

const Navbar = (props) => {
    const { isTransparent } = props

    return (
        <Root isTransparent={isTransparent}>
            <NavContainer>
                <NavList>
                    {navLinks.map((link) => (
                        <NavListItem key={link.id}>
                            <NavLink href={link.href}>{link.name}</NavLink>
                        </NavListItem>
                    ))}
                </NavList>
            </NavContainer>
        </Root>
    )
}

Navbar.propTypes = {
    isTransparent: PropTypes.bool.isRequired,
}

Navbar.defaultProps = {
    isTransparent: false,
}

export default Navbar
