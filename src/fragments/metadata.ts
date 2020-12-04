import { graphql } from 'gatsby'

export const openGraphImageFragment = graphql`
  fragment OpenGraphImage on ContentfulAsset {
    description
    localFile {
      childImageSharp {
        fixed(width: 1200, height: 630) {
          src
        }
      }
    }
  }
`

export const metadataFragment = graphql`
  fragment Metadata on ContentfulMetadata {
    url
    type
    title
    titleTemplate
    description
    keywords
    ogImage {
      ...OpenGraphImage
    }
    twitterCard
  }
`
