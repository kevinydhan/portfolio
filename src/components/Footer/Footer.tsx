import React, { FunctionComponent } from 'react'
import { withQuery } from '$utils'
import type { FooterProps as Props } from './Footer.d'
import useQuery from './Footer.query'
import { Link, LinkText, List, ListHeading, Root } from './Footer.styles'

const Footer: FunctionComponent<Props> = ({ heading, socialLinks }) => (
  <Root>
    <ListHeading>{heading}</ListHeading>
    <List>
      {socialLinks.map((link) => (
        <li key={link.id}>
          <Link href={link.href} rel={link.rel} target={link.target}>
            <LinkText>{link.innerText.text}</LinkText>
          </Link>
        </li>
      ))}
    </List>
  </Root>
)

Footer.defaultProps = {
  socialLinks: [],
}

export default withQuery<Props>(Footer, useQuery)
