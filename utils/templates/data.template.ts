export interface IProject {
    _id: string
    title: string
    description: string
    tags: Array<string>
    url: {
        github?: string
        external?: string
    }
}

export interface ISocialLinks {
    linkedIn?: string
    stackOverflow?: string
    github?: string
}

export const projects: Array<IProject> = []

export const socialLinks: ISocialLinks = {
    linkedIn: 'https://linkedin.com/in/kevinydhan',
    github: 'https://github.com/kevinydhan',
    stackOverflow: 'https://stackoverflow.com/users/11715889/khan?tab=profile',
}
