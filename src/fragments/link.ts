import { graphql } from 'gatsby'

export const linkFragment = graphql`
  fragment Link on ContentfulLink {
    id
    name
    href
    target
    rel
    innerText {
      text
    }
  }
`

export const linkIconFragment = graphql`
  fragment LinkIcon on ContentfulLink {
    icon {
      ...InlineSvg
    }
  }
`
