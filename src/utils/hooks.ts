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
                        fluid(maxWidth: 624, quality: 80) {
                            srcSetWebp
                            originalImg
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
