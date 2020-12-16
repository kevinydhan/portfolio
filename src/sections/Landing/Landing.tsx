import React, { FunctionComponent } from 'react'
import { withQuery } from '$utils'
import type { LandingSectionProps as Props } from './Landing.d'
import useQuery from './Landing.query'
import { CTAButton, Description, Heading, Root } from './Landing.styles'

const LandingSection: FunctionComponent<Props> = ({
  ctaLinks,
  description,
  heading,
}) => (
  <Root>
    <Heading>{heading}</Heading>
    <Description>{description}</Description>
    <div>
      {ctaLinks.map((link) => (
        <CTAButton key={link.id} {...link} />
      ))}
    </div>
  </Root>
)

export default withQuery<Props>(LandingSection, useQuery)
