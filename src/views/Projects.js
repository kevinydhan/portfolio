import React from 'react'
import PropTypes from 'prop-types'
import { ProjectCard } from '@components'
import data from '@data/projects.yml'

const Projects = (props) => {
    const { observeElement, projectImageSrc } = props

    const projects = data.projects.map((project) => ({
        ...project,
        imgSrc: projectImageSrc[project.originalImgName],
    }))

    return (
        <section id="projects">
            {projects.map((project, i) => (
                <ProjectCard
                    {...project}
                    className={data.classNames[i % data.classNames.length]}
                    key={project.originalImgName}
                    observeElement={observeElement}
                />
            ))}
        </section>
    )
}

Projects.propTypes = {
    observeElement: PropTypes.func.isRequired,
    projectImageSrc: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default Projects
