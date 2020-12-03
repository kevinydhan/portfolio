import React, { FunctionComponent } from 'react'

import { Project } from '$components'

import { ProjectsSectionProps } from './Projects.d'
import withQuery from './Projects.query'
import { Heading } from './Projects.styles'

const ProjectsSection: FunctionComponent<ProjectsSectionProps> = ({
  heading,
  projects,
}) => (
  <section id="projects">
    <Heading>{heading}</Heading>
    {projects.map((project) => (
      <Project key={project.id} {...project} />
    ))}
  </section>
)

ProjectsSection.defaultProps = {
  projects: [],
}

export default withQuery(ProjectsSection)
