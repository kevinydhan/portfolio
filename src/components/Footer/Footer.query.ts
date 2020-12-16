import { graphql, useStaticQuery } from 'gatsby'
import type {
  FooterProps as Props,
  FooterQueryData as QueryData,
} from './Footer.d'

const query = graphql`
  query getFooterData {
    navigation: contentfulNavigation(name: { regex: "/social/i" }) {
      heading
      socialLinks: links {
        ...Link
      }
    }
  }
`

const useGetFooterDataQuery = (): Props => {
  const { navigation } = useStaticQuery<QueryData>(query)
  return navigation
}

export default useGetFooterDataQuery
