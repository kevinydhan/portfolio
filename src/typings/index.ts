/**
 * Defines the allowed types for a portfolio project's link.
 */
export enum PortfolioProjectLinkTypes {
    'external' = 'external',
    'github' = 'github',
    'gitlab' = 'gitlab',
    'figma' = 'figma',
}

export enum SocialLinkTypes {
    'linkedin' = 'linkedin',
    'github' = 'github',
    'gitlab' = 'gitlab',
    'stackoverflow' = 'stackoverflow',
}

/**
 * Defines the allowed categories for a portfolio project.
 */
export enum PortfolioProjectCategories {
    'Website Redesign' = 'Website Redesign',
    'Front-End Application' = 'Front-End Application',
    'Full-Stack Application' = 'Full-Stack Application',
    'Website & Mobile App Redesign' = 'Website & Mobile App Redesign',
}

/**
 * Defines the required and optional attributes needed for an `<a>` tag.
 */
export interface AnchorTagAttributes {
    href: string
    target?: '_blank'
    rel?: string
    'aria-label'?: string
}

/**
 * Defines the properties for the navigation link object literal.
 */
export interface NavigationLink extends AnchorTagAttributes {
    text: string
}

export interface PortfolioProjectLink extends AnchorTagAttributes {
    type: keyof typeof PortfolioProjectLinkTypes
}

export interface SocialLink extends AnchorTagAttributes {
    type: keyof typeof SocialLinkTypes
}

/**
 * Defines the schema for the portfolio projects.
 */
export interface PortfolioProject {
    title: string
    description: string
    technologies: string[]
    links: PortfolioProjectLink[]
    startDate: string
    endDate: string | null
    categories: (keyof typeof PortfolioProjectCategories)[]
    imgDetails: {
        originalName: string
        alt: string
        srcSetWebp?: string
        originalImg?: string
    }
}

/**
 * Defines the properties received by `useProjectDataQuery` in `src/utils/hooks.ts`.
 */
export interface PortfolioProjectImageQueryData {
    srcSetWebp: string
    originalImg: string
    originalName: string
}

export interface GatsbyProjectImageStaticQueryData {
    fluid: PortfolioProjectImageQueryData
}

export interface PortfolioProjectImageMap {
    [key: string]: Omit<PortfolioProjectImageQueryData, 'originalName'>
}

export interface FeaturedAndOtherProjectsDataMap {
    featured: PortfolioProject[]
    other: PortfolioProject[]
}
