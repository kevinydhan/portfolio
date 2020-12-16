import { graphql, useStaticQuery } from 'gatsby'
import type {
  TopNavigationProps as Props,
  TopNavigationQueryData as QueryData,
} from './TopNavigation.d'

const query = graphql`
  query getTopNavigationData {
    navigation: contentfulNavigation(name: { regex: "/header/i" }) {
      logo {
        ...InlineSvg
      }
      links {
        ...Link
      }
    }
  }
`

const useGetTopNavigationDataQuery = (): Props => {
  const { navigation } = useStaticQuery<QueryData>(query)
  return {
    ...navigation,
    logoDescription: navigation.logo.description,
    logoSrc: navigation.logo.svg.dataURI,
  }
}

export default useGetTopNavigationDataQuery
