import React, { FunctionComponent } from 'react'
import { LandingSectionProps } from './Landing.d'
import withQuery from './Landing.query'
import { CTAButton, Description, Heading, Root } from './Landing.styles'

const LandingSection: FunctionComponent<LandingSectionProps> = ({
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

export default withQuery(LandingSection)
