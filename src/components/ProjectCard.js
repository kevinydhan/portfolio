import React from 'react'
import PropTypes from 'prop-types'
import { generateKey } from '@utils'

/**
 * Renders a project card.
 */
const ProjectCard = (props) => {
    const { name, description, url, tags } = props

    return (
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <ul>
                {tags.map((tag, i) => (
                    <li key={generateKey(tag, i)}>{tag}</li>
                ))}
            </ul>
        </div>
    )
}

ProjectCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    url: PropTypes.shape({
        external: PropTypes.string,
        git: PropTypes.string,
    }).isRequired,
}

export default ProjectCard
