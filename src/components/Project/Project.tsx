import React, { FunctionComponent } from 'react'
import { ProjectImage, ProjectMetadata } from '$components'
import { ProjectFragment } from '$typings'
import {
  Root,
  Content,
  Heading,
  Description,
  Bold,
  List,
  ListItem,
  Button,
} from './Project.styles'

const Project: FunctionComponent<ProjectFragment> = ({
  name,
  description,
  technologies,
  links,
  images,
  ...metadata
}) => (
  <Root>
    {images.length && <ProjectImage {...images[0]} />}
    <Content>
      {name && <Heading>{name}</Heading>}
      <ProjectMetadata {...metadata} />
      {description && <Description>{description}</Description>}
      <List>
        <Bold>Technologies Used</Bold>
        {technologies.map((technology) => (
          <ListItem key={technology.id}>{technology.name}</ListItem>
        ))}
      </List>
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
    </Content>
  </Root>
)

Project.defaultProps = {
  images: [],
  links: [],
  technologies: [],
}

export default Project
