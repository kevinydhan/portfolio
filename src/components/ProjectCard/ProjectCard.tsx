import React, { FunctionComponent } from 'react'
import PropTypes from 'prop-types'
import {
  GenericLinkPropType,
  GatsbyImageSharpFluidPropType,
  sentencize,
} from '../../utils'
import styles from './ProjectCard.module.scss'
import sharedStyles from '../../styles/modules/index.module.scss'

const linkTextMap = {
  external: 'View site',
  github: 'View code',
  gitlab: 'View code',
  figma: 'View design',
}

interface ProjectCardProps {
  title: string
  description: string
  technologies: []
  links: []
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  title,
  description,
  technologies,
  links,
  imgDetails,
  fluid,
}) => (
  <div className={styles.rootContainer}>
    <picture>
      <source srcSet={fluid.srcSetWebp} type="image/webp" />
      <source srcSet={fluid.srcSet} />
      <img src={fluid.src} alt={imgDetails.alt} className={styles.image} />
    </picture>

    <div className={styles.projectBodyContainer}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        This project was built with <b>{sentencize(technologies)}</b>.
      </p>
      <div className={sharedStyles.buttonContainer}>
        {links.map((link, i) => (
          <a className={sharedStyles.smallButton} key={link.href + i} {...link}>
            {linkTextMap[link.type]}
          </a>
        ))}
      </div>
    </div>
  </div>
)

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      ...GenericLinkPropType,
      type: PropTypes.oneOf(Object.keys(linkTextMap)).isRequired,
    })
  ),
  imgDetails: PropTypes.shape({
    originalName: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
  fluid: PropTypes.exact({
    ...GatsbyImageSharpFluidPropType,
    srcSetWebp: PropTypes.string,
  }),
}

export default ProjectCard
