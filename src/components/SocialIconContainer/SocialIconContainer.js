import React from 'react'
import PropTypes from 'prop-types'
import { Root, Icon, IconLink } from './SocialIconContainer.styled'
import socialLinks from '../../data/social-links'
import localPaths from '../../data/local-paths'

const SocialIconContainer = (props) => {
    const { isLandingVisible } = props
    const defaultRel = 'noreferrer noopener nofollow'

    return (
        <Root isLandingVisible={isLandingVisible}>
            <IconLink
                href={socialLinks.linkedIn}
                target="_blank"
                rel={defaultRel}
            >
                <Icon backgroundImage={localPaths.linkedInIcon} />
            </IconLink>
            <IconLink
                href={socialLinks.github}
                target="_blank"
                rel={defaultRel}
            >
                <Icon backgroundImage={localPaths.githubIcon} />
            </IconLink>
            <IconLink
                href={socialLinks.stackOverflow}
                target="_blank"
                rel={defaultRel}
            >
                <Icon backgroundImage={localPaths.stackOverflowIcon} />
            </IconLink>
        </Root>
    )
}

SocialIconContainer.propTypes = {
    isLandingVisible: PropTypes.bool.isRequired,
}

SocialIconContainer.defaultProps = {
    isLandingVisible: false,
}

export default SocialIconContainer
