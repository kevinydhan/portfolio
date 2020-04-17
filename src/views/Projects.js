import React from 'react'
// import { Section } from '@theme'
import styled from 'styled-components'
import { ProjectCard } from '@components'
import { generateKey } from '@utils'
import content from '@content/projects.yml'

const Projects = () => {
    return (
        <Section id="projects">
            <h2>{content.heading}</h2>
            {content.projects.map((project, i) => {
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

const Section = styled('section')`
    width: 100vw;
    max-width: 1024px;
    min-height: 100vh;
    margin: 200px auto 0;
    padding: 0.75em 1.25em 3em;
`

export default Projects
