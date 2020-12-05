import { graphql, useStaticQuery } from 'gatsby'
import { WithQuery } from '$typings'
import { HeadProps, HeadQueryData } from './Head.d'

const query = graphql`
  query getHeadData {
    metadata: contentfulMetadata {
      ...Metadata
    }
  }
`

const withQuery: WithQuery<HeadProps> = (renderComponent) => () => {
  const queryData = useStaticQuery<HeadQueryData>(query)
  const { ogImage, ...metadata } = queryData.metadata
  const ogImageSrc = `${metadata.url}${ogImage.localFile.childImageSharp.fixed.src}`

  return renderComponent({
    ...metadata,
    ogImage: ogImageSrc,
    ogImageAlt: ogImage.description,
  })
}

export default withQuery
