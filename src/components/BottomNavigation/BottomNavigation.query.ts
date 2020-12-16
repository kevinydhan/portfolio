import { graphql, useStaticQuery } from 'gatsby'
import type {
  BottomNavigationProps,
  BottomNavigationQueryData,
} from './BottomNavigation.d'

const query = graphql`
  query getBottomNavigationData {
    navigation: contentfulNavigation(name: { regex: "/header/i" }) {
      links {
        ...Link
        ...LinkIcon
      }
    }
  }
`

const useGetBottomNavigationDataQuery = (): BottomNavigationProps => {
  const { navigation } = useStaticQuery<BottomNavigationQueryData>(query)
  return navigation
}

export default useGetBottomNavigationDataQuery
