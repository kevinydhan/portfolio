import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const IconLink = (props) => {
    const { children, href } = props
    return (
        <Link href={href} rel="noreferrer noopener nofollow">
            {children}
        </Link>
    )
}

const Link = styled('a')`
    display: flex;
`

export default IconLink
