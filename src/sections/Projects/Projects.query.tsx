import { graphql, useStaticQuery } from 'gatsby'
import type {
  ProjectsSectionProps as Props,
  ProjectsSectionQueryData as QueryData,
} from './Projects.d'

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

const useGetProjectsSectionDataQuery = (): Props => {
  const { section } = useStaticQuery<QueryData>(query)
  return section
}

export default useGetProjectsSectionDataQuery
