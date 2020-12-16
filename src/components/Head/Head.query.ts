import { graphql, useStaticQuery } from 'gatsby'
import type { HeadProps as Props, HeadQueryData as QueryData } from './Head.d'

const query = graphql`
  query getHeadData {
    metadata: contentfulMetadata {
      ...Metadata
    }
  }
`

const useGetHeadDataQuery = (): Props => {
  const queryData = useStaticQuery<QueryData>(query)
  const { ogImage, ...metadata } = queryData.metadata
  const ogImageSrc = `${metadata.url}${ogImage.localFile.childImageSharp.fixed.src}`

  return {
    ...metadata,
    ogImage: ogImageSrc,
    ogImageAlt: ogImage.description,
  }
}

export default useGetHeadDataQuery
