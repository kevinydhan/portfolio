import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from '@theme'

// =============================================================================

const IconLink = (props) => {
    const { children, href } = props

    return (
        <Link href={href} target="_blank" rel="noreferrer noopener nofollow">
            {children}
        </Link>
    )
}

IconLink.propTypes = {
    children: PropTypes.node,
    href: PropTypes.string,
}

// =============================================================================

const { colors, transitions } = theme

// =============================================================================

const Link = styled('a')`
    display: flex;

    path,
    rect {
        transition: fill ${transitions.buttons};
        fill: #fff;
    }

    &:hover path,
    &:active path,
    &:hover rect,
    &:active rect {
        fill: rgba(${colors.heading}, 0.6);
    }

    svg {
        width: 40px;
        height: 40px;
    }

    @media only screen and (min-width: 1024px) {
        svg {
            width: 48px;
            height: 48px;
        }
    }
`

// =============================================================================

export default IconLink
