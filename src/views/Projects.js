// React modules
import React from 'react'
import { ProjectCard } from '@components'
import { useStaticQuery, graphql } from 'gatsby'

// Styling modules
import styled, { css } from 'styled-components'
import { Section } from '@theme'

// Misc. modules
import content from '@content/projects.yml'
import { generateKey } from '@utils'

// =============================================================================

/**
 * For this to work, each project in `projects.yml` must have a `imgSrc`
 * property set to the corresponding image file name.
 *
 * @example
 * imgSrc: project-mockup-small.png
 */
const Projects = () => {
    const data = useStaticQuery(
        graphql`
            query loadProjectMockups {
                allImageSharp {
                    edges {
                        node {
                            fixed(pngQuality: 10) {
                                srcWebp
                                originalName
                            }
                        }
                    }
                }
            }
        `
    )

    /**
     * Creates a hash map where each key is the image file name and the value
     * is an object containing the `srcWebp` and `originalName` properties of
     * the image.
     */
    const imageHashMap = data.allImageSharp.edges.reduce((hashMap, edge) => {
        const imageDetails = edge.node.fixed
        if (hashMap[imageDetails.originalName]) {
            // Do something with duplicate entries
        } else {
            hashMap[imageDetails.originalName] = { ...imageDetails }
        }
        return hashMap
    }, {})

    /**
     * Updates the `imgSrc` property of each project object literal to the
     * `srcWebp` value generated by Gatsby.
     */
    const projects = content.projects.map((project) => ({
        ...project,
        imgSrc: imageHashMap[project.imgSrc]
            ? imageHashMap[project.imgSrc].srcWebp
            : imageHashMap['project-mockup-small.png'].srcWebp,
    }))

    return (
        <Section id="projects" additionalStyles={additionalSectionStyles}>
            {/* <Heading>{content.heading}</Heading> */}
            {projects.map((project, i) => {
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

// =============================================================================

const additionalSectionStyles = css`
    padding-top: 100px;
`

// =============================================================================

const Heading = styled('h2')`
    font-size: 27px;
`

// =============================================================================

export default Projects
