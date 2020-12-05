import { MetadataFragment } from '$typings'

export interface HeadQueryData {
  metadata: MetadataFragment
}

export interface HeadProps extends Partial<Omit<MetadataFragment, 'ogImage'>> {
  ogImage?: MetadataFragment['ogImage']['localFile']['childImageSharp']['fixed']['src']
  ogImageAlt?: MetadataFragment['ogImage']['description']
}
