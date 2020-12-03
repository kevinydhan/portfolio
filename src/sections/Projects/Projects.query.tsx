import { useStaticQuery, graphql } from 'gatsby'
import { WithQuery } from '$typings'
import { ProjectsSectionQueryData, ProjectsSectionProps } from './Projects.d'

const query = graphql`
  query getProjectsSectionData {
    section: contentfulSection(name: { regex: "/projects/i" }) {
      heading
      projects: contentfulchildren {
        ...Project
      }
    }
  }
`

const withQuery: WithQuery<ProjectsSectionProps> = (renderComponent) => () => {
  const { section } = useStaticQuery<ProjectsSectionQueryData>(query)
  return renderComponent(section)
}

export default withQuery
