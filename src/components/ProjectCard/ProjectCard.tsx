import React from 'react'
import PropTypes from 'prop-types'
import IconContainer from '../IconContainer/IconContainer'
import { PortfolioProjectCategories } from '../../typings'
import { PropTypePortfolioProjectLink } from '../../utils'
import styles from './ProjectCard.module.scss'

const ProjectCard = ({
    title,
    description,
    technologies,
    links,
    startDate,
    endDate,
    categories,
    imgDetails,
    featured,
}): JSX.Element => (
    <section className={styles.featuredProject} key={title}>
        {/* Picture */}
        {featured && (
            <picture className={styles.picture}>
                <img
                    className={styles.projectImage}
                    srcSet={imgDetails.srcSetWebp}
                    alt={imgDetails.alt}
                />
            </picture>
        )}

        <div className={styles.content}>
            <div className={styles.projectHeader}>
                {/* Metadata Annotations */}
                <div className={styles.metadataContainer}>
                    <span className={styles.metadata}>
                        {startDate.slice(0, 4)} –{' '}
                        {endDate ? endDate.slice(0, 4) : 'Current'}
                    </span>
                    <span className={styles.metadata}>
                        {categories.join(', ')}
                    </span>
                </div>

                {/* Icons */}
                <IconContainer links={links} />
            </div>

            <div className={styles.projectBody}>
                <div>
                    {/* Project Body */}
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.description}>{description}</p>
                </div>

                {/* Technology Tags */}
                <ul className={styles.technologyList}>
                    {technologies.map((tag) => (
                        <li
                            className={styles.technologyTag}
                            key={`${title}-${tag}`}
                        >
                            {tag}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
)

ProjectCard.defaultProps = {
    featured: false,
}

ProjectCard.propTypes = {
    featured: PropTypes.bool,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    links: PropTypes.arrayOf(PropTypePortfolioProjectLink).isRequired,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    categories: PropTypes.arrayOf(
        PropTypes.oneOf(Object.keys(PortfolioProjectCategories))
    ).isRequired,
    imgDetails: PropTypes.shape({
        originalName: PropTypes.string,
        alt: PropTypes.string,
        srcSetWebp: PropTypes.string,
        originalImg: PropTypes.string,
    }),
}

export default ProjectCard
