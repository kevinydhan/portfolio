import React, { FunctionComponent } from 'react'
import { Project } from '$components'
import { withQuery } from '$utils'
import type { ProjectsSectionProps as Props } from './Projects.d'
import useQuery from './Projects.query'
import { Heading } from './Projects.styles'

const ProjectsSection: FunctionComponent<Props> = ({ heading, projects }) => (
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

export default withQuery<Props>(ProjectsSection, useQuery)
