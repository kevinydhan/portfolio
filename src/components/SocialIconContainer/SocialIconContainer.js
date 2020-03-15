import React from 'react'
import PropTypes from 'prop-types'
import { Root, IconLink } from './SocialIconContainer.styled'
import { LinkedInIcon, GithubIcon, StackOverflowIcon } from '../Icons/Icons'
import socialLinks from '../../data/social-links'

const SocialIconContainer = (props) => {
    return (
        <Root>
            <IconLink href={socialLinks.linkedIn} target="_blank">
                <LinkedInIcon />
            </IconLink>
            <IconLink href={socialLinks.github} target="_blank">
                <GithubIcon />
            </IconLink>
            <IconLink href={socialLinks.stackOverflow} target="_blank">
                <StackOverflowIcon />
            </IconLink>
        </Root>
    )
}

SocialIconContainer.propTypes = {}

export default SocialIconContainer
