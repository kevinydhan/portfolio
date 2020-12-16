import { graphql, useStaticQuery } from 'gatsby'
import type {
  LandingSectionProps as Props,
  LandingSectionQueryData as QueryData,
} from './Landing.d'

const query = graphql`
  query getLandingSectionData {
    section: contentfulSection(name: { regex: "/landing/i" }) {
      heading
      description
      ctaLinks: contentfulchildren {
        ...Link
      }
    }
  }
`

const useGetLandingSectionDataQuery = (): Props => {
  const { section } = useStaticQuery<QueryData>(query)
  return section
}

export default useGetLandingSectionDataQuery
