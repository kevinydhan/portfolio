import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    Root,
    ToggleNavListButton,
    NavContainer,
    NavList,
    NavListItem,
    NavLink,
} from './Navbar.styled'
import navLinks from '../../data/nav-links'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false,
        }

        this.toggleNavList = this.toggleNavList.bind(this)
    }

    toggleNavList() {
        const { isVisible } = this.state
        this.setState({ isVisible: !isVisible })
    }

    render() {
        const { props, state, toggleNavList } = this
        const { isTransparent } = props
        const { isVisible } = state

        return (
            <Root isTransparent={isTransparent}>
                <NavContainer>
                    <ToggleNavListButton onClick={toggleNavList} />
                    <NavList isVisible={isVisible}>
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
}

Navbar.propTypes = {
    isTransparent: PropTypes.bool.isRequired,
}

Navbar.defaultProps = {
    isTransparent: false,
}

export default Navbar
