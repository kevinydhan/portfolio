import React, { FunctionComponent } from 'react'
import type { ProjectImageFragment } from '$typings'
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
      alt={description}
      width={localFile.childImageSharp.fluid.width}
      height={localFile.childImageSharp.fluid.height}
      src={localFile.childImageSharp.fluid.src}
      sizes={localFile.childImageSharp.fluid.sizes}
      loading="lazy"
    />
  </Root>
)

export default ProjectImage
