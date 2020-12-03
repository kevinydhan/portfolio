import React, { FunctionComponent } from 'react'
import { LandingSectionProps } from './Landing.d'
import withQuery from './Landing.query'
import { Root, Heading, Description, Button } from './Landing.styles'

const LandingSection: FunctionComponent<LandingSectionProps> = ({
  heading,
  description,
  ctaLinks,
}) => (
  <Root>
    <Heading>{heading}</Heading>
    <Description>{description}</Description>
    <div>
      {ctaLinks.map((link) => (
        <Button
          key={link.id}
          href={link.href}
          target={link.target}
          rel={link.rel}
        >
          {link.innerText.text}
        </Button>
      ))}
    </div>
  </Root>
)

export default withQuery(LandingSection)
