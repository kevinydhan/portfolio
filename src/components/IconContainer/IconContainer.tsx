import React from 'react'
import PropTypes from 'prop-types'
import ExternalLinkIcon from '../_icons/ExternalLinkIcon'
import GithubIcon from '../_icons/GithubIcon'
import FigmaIcon from '../_icons/FigmaIcon'
import LinkedInIcon from '../_icons/LinkedInIcon'
import GitLabIcon from '../_icons/GitLabIcon'
import StackOverflowIcon from '../_icons/StackOverflowIcon'
import { IconLink } from '../../utils/prop-types'
import styles from './IconContainer.module.scss'

const iconMap = {
    external: <ExternalLinkIcon />,
    github: <GithubIcon />,
    figma: <FigmaIcon />,
    linkedin: <LinkedInIcon />,
    gitlab: <GitLabIcon />,
    stackoverflow: <StackOverflowIcon />,
}

const IconContainer = ({ links, isCircled }): JSX.Element => {
    const containerClassName =
        styles.container + (isCircled ? ` ${styles.flex}` : '')
    const iconLinkClassName =
        styles.iconLink + (isCircled ? ` ${styles.circled}` : '')

    return (
        <div className={containerClassName}>
            {links.map(({ type, ...linkProps }, i: number) => (
                <a
                    className={iconLinkClassName}
                    key={`${type}-${i}`}
                    {...linkProps}
                >
                    {iconMap[type]}
                </a>
            ))}
        </div>
    )
}

IconContainer.defaultProps = {
    isCircled: false,
}

IconContainer.propTypes = {
    links: PropTypes.arrayOf(IconLink).isRequired,
    isCircled: PropTypes.bool,
}

export default IconContainer
