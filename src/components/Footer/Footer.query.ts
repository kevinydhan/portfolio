import { graphql, useStaticQuery } from 'gatsby'
import { WithQuery } from '$typings'
import { FooterProps, FooterQueryData } from './Footer.d'

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

const withQuery: WithQuery<FooterProps> = (renderComponent) => () => {
  const { navigation } = useStaticQuery<FooterQueryData>(query)
  return renderComponent(navigation)
}

export default withQuery
