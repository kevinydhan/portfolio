import { useStaticQuery, graphql } from 'gatsby'
import { projects } from '../config'

export const useProjectDataQuery = () => {
    const {
        allImageSharp: { nodes },
    } = useStaticQuery(
        graphql`
            query getProjectImages {
                allImageSharp(
                    filter: {
                        fluid: { originalName: { regex: "/ProjectImage/" } }
                    }
                ) {
                    nodes {
                        fluid(maxWidth: 1000, quality: 80, webpQuality: 80) {
                            ...GatsbyImageSharpFluid
                            srcSetWebp
                        }
                    }
                }
            }
        `
    )

    return projects.map((project) => {
        return {
            ...project,
            ...nodes.find((node) => {
                return node.fluid.src.includes(project.imgDetails.originalName)
            }),
        }
    })
}
