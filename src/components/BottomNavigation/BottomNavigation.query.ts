import { graphql, useStaticQuery } from 'gatsby'

import { WithQuery } from '$typings'

import {
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

const withQuery: WithQuery<BottomNavigationProps> = (renderComponent) => () => {
  const { navigation } = useStaticQuery<BottomNavigationQueryData>(query)
  return renderComponent(navigation)
}

export default withQuery
