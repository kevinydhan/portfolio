import { ProjectFragment } from '$typings'

type ProjectMetadata =
  | 'endDate'
  | 'endDateText'
  | 'roles'
  | 'startDate'
  | 'startDateText'
  | 'technologies'
  | 'type'

export type ProjectMetadataProps = Pick<ProjectFragment, ProjectMetadata>

export interface ProjectMetadataListTermProps {
  fullWidth?: boolean
}

export interface ProjectMetadataListDetailProps {
  showBullet?: boolean
}
