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

export const projects: Array<IProject> =[{"_id":"5dc8a01b1c9d440000da1924","title":"Grace Shopper","description":"Mock e-commerce website","url":{"github":"https://github.com/graceshoppers/grace-shoppers","external":"https://kbmk.herokuapp.com"},"tags":["React","Redux","CSS","Node.js","Express"]},{"_id":"5dc9e8931c9d440000fac432","title":"infini","description":"Song recommendation tool using Spotify Web API","url":{"github":"https://github.com/ydhan18/infini","external":"https://infini-songs.herokuapp.com"},"tags":["React","Redux","Spotify Web API","Node.js","Express"]}]
