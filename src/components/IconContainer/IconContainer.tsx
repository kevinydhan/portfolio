import React from 'react'
import PropTypes from 'prop-types'
import ExternalLinkIcon from '../_icons/ExternalLinkIcon'
import GithubIcon from '../_icons/GithubIcon'
import FigmaIcon from '../_icons/FigmaIcon'
import { PropTypePortfolioProjectLink } from '../../utils/prop-types'
import styles from './IconContainer.module.scss'

const iconMap = {
    external: <ExternalLinkIcon />,
    github: <GithubIcon />,
    figma: <FigmaIcon />,
}

const IconContainer = ({ links }): JSX.Element => (
    <div className={styles.container}>
        {links.map(({ type, ...linkProps }, i: number) => (
            <a className={styles.iconLink} key={`${type}-${i}`} {...linkProps}>
                {iconMap[type]}
            </a>
        ))}
    </div>
)

IconContainer.propTypes = {
    links: PropTypes.arrayOf(PropTypePortfolioProjectLink).isRequired,
}

export default IconContainer
