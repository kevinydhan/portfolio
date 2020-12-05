import React, { FunctionComponent } from 'react'
import { TopNavigationProps } from './TopNavigation.d'
import withQuery from './TopNavigation.query'
import {
  Link,
  LinkText,
  List,
  ListItem,
  LogoLink,
  Nav,
  NavContainer,
  Root,
} from './TopNavigation.styles'

const TopNavigation: FunctionComponent<TopNavigationProps> = ({
  logo,
  links,
}) => (
  <Root role="banner">
    <NavContainer>
      <LogoLink href="/#" aria-label="Logo">
        <span dangerouslySetInnerHTML={{ __html: logo }} />
      </LogoLink>
      <Nav>
        <List>
          {links.map((link) => (
            <ListItem key={link.id}>
              <Link href={link.href} target={link.target} rel={link.rel}>
                <LinkText>{link.name}</LinkText>
              </Link>
            </ListItem>
          ))}
        </List>
      </Nav>
    </NavContainer>
  </Root>
)

TopNavigation.defaultProps = {
  links: [],
}

export default withQuery(TopNavigation)
