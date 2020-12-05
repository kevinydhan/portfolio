import { graphql } from 'gatsby'

export const inlineSvgFragment = graphql`
  fragment InlineSvg on ContentfulAsset {
    description
    svg {
      dataURI
    }
  }
`
