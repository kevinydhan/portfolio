import React, { FunctionComponent } from 'react'

import { ProjectImageFragment } from '$typings'

import { Image, Root } from './ProjectImage.styles'

const ProjectImage: FunctionComponent<ProjectImageFragment> = ({
  description,
  localFile,
}) => (
  <Root>
    <source
      srcSet={localFile.childImageSharp.fluid.srcSetWebp}
      type="image/webp"
    />
    <source
      srcSet={localFile.childImageSharp.fluid.srcSet}
      type={localFile.internal.mediaType}
    />
    <Image
      src={localFile.childImageSharp.fluid.src}
      alt={description}
      sizes={localFile.childImageSharp.fluid.sizes}
      loading="lazy"
    />
  </Root>
)

export default ProjectImage
