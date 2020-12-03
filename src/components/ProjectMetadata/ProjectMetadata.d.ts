import { ProjectFragment } from '$typings'

type ProjectMetadata =
  | 'type'
  | 'startDate'
  | 'startDateText'
  | 'endDate'
  | 'endDateText'
  | 'roles'

export type ProjectMetadataProps = Pick<ProjectFragment, ProjectMetadata>
