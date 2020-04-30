import React, { memo, useRef } from 'react'
import PropTypes from 'prop-types'
import { ProjectCard } from '@components'
import data from '@data/projects.yml'
import { backgroundActionClassNames as bgac } from '@data/classnames'

const Projects = ({ observeElement, projectImageSrc }) => {
    // const counter = useRef(0)
    // const increment = () => counter.current++
    // increment()
    // console.log(
    //     `Projects view component was rendered ${counter.current} time(s).`
    // )

    const projects = data.projects.map((project) => ({
        ...project,
        imgSrc: projectImageSrc[project.originalImgName],
    }))

    return (
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
}

const colorOrder = ['lightblue', 'yellow', 'red']
const getProjectCardClassName = (i) => {
    const k = colorOrder[i % colorOrder.length]
    return bgac[k]
}

Projects.propTypes = {
    observeElement: PropTypes.func.isRequired,
    projectImageSrc: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default memo(Projects, (prevProps, nextProps) => {
    const isSameObserveElementProp =
        prevProps.observeElement == nextProps.observeElement

    const isSameProjectImageSrcProp =
        prevProps.projectImageSrc === nextProps.projectImageSrc

    return isSameObserveElementProp && isSameProjectImageSrcProp
})
