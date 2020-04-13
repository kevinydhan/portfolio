import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
    return (
        <Header>
            <nav>
                <ul>
                    <li>Experience</li>
                    <li>Projects</li>
                    <li>Resume</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </Header>
    )
}

const Header = styled('header')`
    position: absolute;
`

export default Navbar
