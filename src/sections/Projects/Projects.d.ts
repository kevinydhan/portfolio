import { ProjectFragment } from '$typings'

export interface ProjectsSectionQueryData {
  section: {
    heading: string
    projects: ProjectFragment[]
  }
}

export type ProjectsSectionProps = ProjectsSectionQueryData['section']
