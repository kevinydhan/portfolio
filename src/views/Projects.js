import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { ProjectCard } from '@components'
import { PropTypeProject } from '@utils'
import { backgroundActionClassNames as bgac } from '@data/classnames'

// =============================================================================

const Projects = ({ observeElement, projects }) => (
    <section id="projects">
        {projects.map((project, i) => (
            <ProjectCard
                {...project}
                key={project.originalImgName}
                className={getProjectCardClassName(i)}
                observeElement={observeElement}
            />
        ))}
    </section>
)

const colorOrder = ['lightblue', 'yellow', 'red']
const getProjectCardClassName = (i) => {
    const k = colorOrder[i % colorOrder.length]
    return bgac[k]
}

Projects.propTypes = {
    observeElement: PropTypes.func.isRequired,
    projects: PropTypes.arrayOf(PropTypes.exact({ ...PropTypeProject }))
        .isRequired,
}

// =============================================================================

export default memo(Projects, (prevProps, nextProps) => {
    const isSameObserveElementProp =
        prevProps.observeElement == nextProps.observeElement

    const isSameprojectsProp = prevProps.projects === nextProps.projects

    return isSameObserveElementProp && isSameprojectsProp
})
