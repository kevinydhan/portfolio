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

export const projects: Array<IProject> = []
