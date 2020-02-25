const META_TAG_ATTRIBUTES: Array<string> = [
    'charset',
    'content',
    'http-equiv',
    'name',
]

export interface IGenerateMetaTagsConfig {
    title: string
    description: string
    url: string
    author?: string
    imageUrl?: string
    include: Array<string>
}

const createPrimaryMetaTags = () => {}

const createOpenGraphMetaTags = () => {}

const createTwitterMetaTags = () => {}

export default (config: IGenerateMetaTagsConfig): string => {
    return ''
}
