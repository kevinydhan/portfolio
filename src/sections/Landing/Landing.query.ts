import { useStaticQuery, graphql } from 'gatsby'
import { WithQuery } from '$typings'
import { LandingSectionQueryData, LandingSectionProps } from './Landing.d'

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

const withQuery: WithQuery<LandingSectionProps> = (renderComponent) => () => {
  const { section } = useStaticQuery<LandingSectionQueryData>(query)
  return renderComponent(section)
}

export default withQuery