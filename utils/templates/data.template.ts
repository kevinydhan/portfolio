export interface PortfolioProject {
    _id: string
    title: string
    description: string
    tags: Array<string>
    url: {
        github?: string
        external?: string
    }
}

export interface SocialLinks {
    linkedIn?: string
    stackOverflow?: string
    github?: string
}

export const projects: Array<PortfolioProject> = []

export const socialLinks: SocialLinks = {
    linkedIn: 'https://linkedin.com/in/kevinydhan',
    github: 'https://github.com/kevinydhan',
    stackOverflow: 'https://stackoverflow.com/users/11715889/khan?tab=profile',
}
