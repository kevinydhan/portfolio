import {
    PortfolioProject,
    GatsbyProjectImageStaticQueryData,
    PortfolioProjectImageMap,
    FeaturedAndOtherProjectsDataMap,
} from '../typings'
import { projects } from '../data/projects.json'

export const createProjectImageDataMap = (
    queryData: GatsbyProjectImageStaticQueryData[]
): PortfolioProjectImageMap => {
    return queryData.reduce((map, { fluid }) => {
        const { originalName, ...imgDetails } = fluid

        if (!map[originalName]) map[originalName] = imgDetails

        return map
    }, {})
}

export const transformQueryData = (
    projectImageMap: PortfolioProjectImageMap
) => {
    return projects.map((project) => ({
        ...project,
        imgDetails: {
            ...project.imgDetails,
            ...projectImageMap[project.imgDetails.originalName],
        },
    }))
}
