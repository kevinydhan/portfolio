import { graphql } from 'gatsby'

export const projectFragment = graphql`
  fragment Project on ContentfulProject {
    id
    name
    description
    type
    startDate(formatString: "YYYY-MM-DDTHH:mm:ss.SSSZ")
    startDateText: startDate(formatString: "MMM YYYY")
    endDate(formatString: "YYYY-MM-DDTHH:mm:ss.SSSZ")
    endDateText: endDate(formatString: "MMM YYYY")
    roles {
      name
    }
    technologies {
      id
      name
    }
    links {
      ...Link
    }
    images {
      ...ProjectImage
    }
  }
`

export const projectImageFragment = graphql`
  fragment ProjectImage on ContentfulAsset {
    id
    description
    localFile {
      childImageSharp {
        fluid(maxWidth: 1920, sizes: "(max-width: 47.9375em) 100vw, 50vw") {
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          width: presentationWidth
          height: presentationHeight
        }
      }
      internal {
        mediaType
      }
    }
  }
`
