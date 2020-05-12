import {
    PortfolioProject,
    GatsbyProjectImageStaticQueryData,
    PortfolioProjectImageMap,
    FeaturedAndOtherProjectsDataMap,
} from '../typings'
import projectData from '../data/projects.json'

const projects = projectData.projects as PortfolioProject[]
const featured = projectData.featured

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
): FeaturedAndOtherProjectsDataMap => {
    const allProjects = projects.map((project) => ({
        ...project,
        imgDetails: {
            ...project.imgDetails,
            ...projectImageMap[project.imgDetails.originalName],
        },
    }))

    return {
        featured: allProjects.filter((project) => {
            return featured.includes(project.title)
        }),
        other: allProjects.filter((project) => {
            return !featured.includes(project.title)
        }),
    }
}
