import { graphql, useStaticQuery } from 'gatsby'
import { WithQuery } from '$typings'
import { TopNavigationProps, TopNavigationQueryData } from './TopNavigation.d'

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

const withQuery: WithQuery<TopNavigationProps> = (renderComponent) => () => {
  const { navigation } = useStaticQuery<TopNavigationQueryData>(query)
  return renderComponent({
    ...navigation,
    logoDescription: navigation.logo.description,
    logoSrc: navigation.logo.svg.dataURI,
  })
}

export default withQuery
