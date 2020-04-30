import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import IconLink from './IconLink'
import ExternalLinkIcon from './icons/ExternalLinkIcon'
import FigmaIcon from './icons/FigmaIcon'
import GithubCircleIcon from './icons/GithubCircleIcon'
import GitLabIcon from './icons/GitLabIcon'
import LinkedInIcon from './icons/LinkedInIcon'
import StackOverflowIcon from './icons/StackOverflowIcon'
import { PropTypeIconLink } from '@utils/types'

// =============================================================================

const IconContainer = ({ links, additionalStyles }) => (
    <Container additionalStyles={additionalStyles}>
        {links.map((link, i) => {
            const { type, ...linkProps } = link

            return (
                <IconLink key={`${type}-${i}`} {...linkProps}>
                    {iconTypes[type]()}
                </IconLink>
            )
        })}
    </Container>
)

const iconTypes = {
    linkedin: LinkedInIcon,
    github: GithubCircleIcon,
    gitlab: GitLabIcon,
    stackoverflow: StackOverflowIcon,
    external: ExternalLinkIcon,
    figma: FigmaIcon,
}

IconContainer.propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape(PropTypeIconLink)).isRequired,
    additionalStyles: PropTypes.array,
}

// =============================================================================

const Container = styled('div')`
    margin: 1.75em 0 0;

    a + a {
        margin-left: 24px;
    }

    @media only screen and (min-width: 1366px) {
        margin: 2em 0 0;
    }

    ${({ additionalStyles }) => additionalStyles}
`

Container.propTypes = {
    additionalStyles: PropTypes.array,
}

// =============================================================================

export default IconContainer
