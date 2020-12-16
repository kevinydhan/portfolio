import React, { FunctionComponent } from 'react'
import { ProjectImage, ProjectMetadata } from '$components'
import type { ProjectFragment } from '$typings'
import {
  ButtonContainer,
  Content,
  CTAButton,
  Description,
  Heading,
  Root,
} from './Project.styles'

const Project: FunctionComponent<ProjectFragment> = ({
  name,
  description,
  links,
  images,
  ...metadata
}) => (
  <Root>
    {images.length && <ProjectImage {...images[0]} />}
    <Content>
      {name && <Heading>{name}</Heading>}
      {description && <Description>{description}</Description>}
      <ProjectMetadata {...metadata} />
      <ButtonContainer>
        {links.map((link) => (
          <CTAButton key={link.id} {...link} />
        ))}
      </ButtonContainer>
    </Content>
  </Root>
)

Project.defaultProps = {
  images: [],
  links: [],
  technologies: [],
}

export default Project
