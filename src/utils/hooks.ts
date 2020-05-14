import { useStaticQuery, graphql } from 'gatsby'
import { FeaturedAndOtherProjectsDataMap } from '../typings'
import { createProjectImageDataMap, transformQueryData } from './helpers'

export const useProjectDataQuery = (): FeaturedAndOtherProjectsDataMap => {
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
                            quality: 70
                            webpQuality: 70
                            srcSetBreakpoints: [375, 510, 600]
                        ) {
                            srcSetWebp
                            originalName
                            src
                            srcSet
                        }
                    }
                }
            }
        `
    )

    const projectImageMap = createProjectImageDataMap(allImageSharp.nodes)

    return transformQueryData(projectImageMap)
}
