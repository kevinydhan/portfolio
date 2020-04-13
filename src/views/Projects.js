import React from 'react'
import { Section } from '@theme'
import { ProjectCard } from '@components'
import { generateKey } from '@utils'
import YAML from '@content/projects.yml'

const Projects = () => {
    console.log(YAML)

    return (
        <Section>
            {YAML.title}
            {YAML.projects.map((project, i) => {
                return (
                    <ProjectCard
                        key={generateKey(project.name, i)}
                        {...project}
                    />
                )
            })}
        </Section>
    )
}

export default Projects
