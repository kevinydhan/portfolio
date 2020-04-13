import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ButtonLink = (props) => {
    const { href, text } = props

    return <Anchor href={href}>{text}</Anchor>
}

const Anchor = styled('a')`
    align-items: center;
    border: 1px solid white;
    display: flex;
    height: 56px;
    justify-content: center;
    padding: 8px;
    position: relative;
    text-transform: uppercase;
    width: 100%;

    &:hover,
    &:active {
        color: blue;
    }
`

ButtonLink.propTypes = {
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
}

export default ButtonLink
