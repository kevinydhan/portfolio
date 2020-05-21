import { useStaticQuery, graphql } from 'gatsby'
import { createProjectImageDataMap, transformQueryData } from './helpers'

export const useProjectDataQuery = () => {
    const { allImageSharp } = useStaticQuery(
        graphql`
            query getProjectImages {
                allImageSharp(
                    filter: {
                        fluid: { originalName: { regex: "/ProjectImage/" } }
                    }
                ) {
                    nodes {
                        fluid(
                            maxWidth: 600
                            quality: 80
                            webpQuality: 80
                            srcSetBreakpoints: [375, 500, 600]
                        ) {
                            src
                            srcSet
                            srcSetWebp
                            originalName
                        }
                    }
                }
            }
        `
    )

    const projectImageMap = createProjectImageDataMap(allImageSharp.nodes)

    return transformQueryData(projectImageMap)
}
