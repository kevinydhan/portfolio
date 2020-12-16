import React, { FunctionComponent } from 'react'
import type { ProjectMetadataProps } from './ProjectMetadata.d'
import { convertDateToISOString as isoString } from './ProjectMetadata.helpers'
import { Detail, Root, Term } from './ProjectMetadata.styles'

const ProjectMetadata: FunctionComponent<ProjectMetadataProps> = ({
  type,
  startDate,
  startDateText,
  endDate,
  endDateText,
  roles,
  technologies,
}) => (
  <Root>
    <Term>Dates</Term>
    <Detail>
      <time dateTime={isoString(startDate)}>{startDateText}</time>
      <span> &ndash; </span>
      {endDate ? (
        <time dateTime={isoString(endDate)}>{endDateText}</time>
      ) : (
        <span>Current</span>
      )}
    </Detail>
    <Term>Role(s)</Term>
    <Detail>{roles.map((role) => role.name).join(', ')}</Detail>
    <Term>Project Type</Term>
    <Detail>{type}</Detail>
    <Term fullWidth>Technologies</Term>
    {technologies.map((technology) => (
      <Detail showBullet key={technology.id}>
        {technology.name}
      </Detail>
    ))}
  </Root>
)

ProjectMetadata.defaultProps = {
  technologies: [],
}

export default ProjectMetadata
