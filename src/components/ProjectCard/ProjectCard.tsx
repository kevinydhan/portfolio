import React from 'react'
import PropTypes from 'prop-types'
import {
    GenericLinkPropType,
    GatsbyImageSharpFluidPropType,
    sentencize,
} from '../../utils'
import styles from './ProjectCard.module.scss'
import {
    smallButton as smallButtonStyles,
    buttonContainer as buttonContainerStyles,
} from '../../styles/modules/index.module.scss'

const linkTextMap = {
    external: 'View site',
    github: 'View code',
    gitlab: 'View code',
    figma: 'View design',
}

const ProjectCard = ({
    title,
    description,
    technologies,
    links,
    imgDetails,
    fluid,
}): JSX.Element => (
    <div className={styles.rootContainer}>
        <picture>
            <source srcSet={fluid.srcSetWebp} type="image/webp" />
            <source srcSet={fluid.srcSet} />
            <img
                src={fluid.src}
                alt={imgDetails.alt}
                className={styles.image}
            />
        </picture>

        <div className={styles.projectBodyContainer}>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>
                This project was built with <b>{sentencize(technologies)}</b>.
            </p>
            <div className={buttonContainerStyles}>
                {links.map((link, i) => (
                    <a
                        className={smallButtonStyles}
                        key={link.href + i}
                        {...link}
                    >
                        {linkTextMap[link.type]}
                    </a>
                ))}
            </div>
        </div>
    </div>
)

// const linkTextMap = {
//     external: 'View site',
//     github: 'View code',
//     gitlab: 'View code',
//     figma: 'View design',
// }

// const ProjectCard = ({
//     title,
//     description,
//     links,
//     technologies,
//     imgDetails,
// }): JSX.Element => (
//     <div className={styles.rootContainer}>
//         <picture>
//             <source srcSet={imgDetails.srcSetWebp} type="image/webp" />
//             <img
//                 className={styles.img}
//                 src={imgDetails.src}
//                 srcSet={imgDetails.srcSet}
//                 alt={imgDetails.alt}
//             />
//         </picture>

//         <div className={styles.projectBodyContainer}>
//             <div>
//                 {/* Project body */}
//                 <h3 className={styles.title}>{title}</h3>
//                 <p className={styles.description}>{description}</p>
//                 <p className={styles.description}>
//                     This project was built with {sentencize(technologies)}.
//                 </p>
//             </div>

//             <ul className={styles.projectLinkContainer}>
//                 {links.map(({ type, ...linkProps }, i: string) => (
//                     <li key={`${type}-${i}`}>
//                         <a
//                             className={`link ${styles.projectLink}`}
//                             {...linkProps}
//                         >
//                             {linkTextMap[type]}
//                         </a>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     </div>
// )

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
