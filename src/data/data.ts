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

export const projects: Array<PortfolioProject> =[
    {
        "_id": "5dc8a01b1c9d440000da1924",
        "title": "Grace Shopper",
        "description": "Mock e-commerce website",
        "url": {
            "github": "https://github.com/graceshoppers/grace-shoppers",
            "external": "https://kbmk.herokuapp.com"
        },
        "tags": [
            "React",
            "Redux",
            "CSS",
            "Node.js",
            "Express"
        ]
    },
    {
        "_id": "5dc9e8931c9d440000fac432",
        "title": "infini",
        "description": "Song recommendation tool using Spotify Web API",
        "url": {
            "github": "https://github.com/ydhan18/infini",
            "external": "https://infini-songs.herokuapp.com"
        },
        "tags": [
            "React",
            "Redux",
            "Spotify Web API",
            "Node.js",
            "Express"
        ]
    }
]

export const socialLinks: SocialLinks = {
    linkedIn: 'https://linkedin.com/in/kevinydhan',
    github: 'https://github.com/kevinydhan',
    stackOverflow: 'https://stackoverflow.com/users/11715889/khan?tab=profile',
}
