import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// =============================================================================

const IconLink = (props) => {
    const { children, href } = props

    return (
        <Link href={href} rel="noreferrer noopener nofollow">
            {children}
        </Link>
    )
}

IconLink.propTypes = {
    children: PropTypes.node,
    href: PropTypes.string,
}

// =============================================================================

const Link = styled('a')`
    display: flex;

    svg {
        width: 40px;
        height: 40px;
    }
`

// =============================================================================

export default IconLink
