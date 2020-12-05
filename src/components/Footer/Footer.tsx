import React, { FunctionComponent } from 'react'
import { FooterProps } from './Footer.d'
import withQuery from './Footer.query'
import { Link, LinkText, List, ListHeading, Root } from './Footer.styles'

const Footer: FunctionComponent<FooterProps> = ({ heading, socialLinks }) => (
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

export default withQuery(Footer)
