import React, { FunctionComponent } from 'react'
import { ProjectImage, ProjectMetadata } from '$components'
import { ProjectFragment } from '$typings'
import {
  Button,
  ButtonContainer,
  Content,
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
          <Button
            key={link.id}
            href={link.href}
            target={link.target}
            rel={link.rel}
          >
            {link.innerText.text}
          </Button>
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
