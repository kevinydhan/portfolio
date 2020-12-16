import React, { FunctionComponent } from 'react'
import { ScrollContext } from '$context'
import { withQuery } from '$utils'
import type { TopNavigationProps as Props } from './TopNavigation.d'
import useQuery from './TopNavigation.query'
import {
  Link,
  LinkText,
  List,
  ListItem,
  Logo,
  LogoLink,
  Nav,
  NavContainer,
  Root,
} from './TopNavigation.styles'

const TopNavigation: FunctionComponent<Props> = ({
  links,
  logoSrc,
  logoDescription,
}) => (
  <ScrollContext.Consumer>
    {({ isScrollingDown }) => (
      <Root role="banner" isScrollingDown={isScrollingDown}>
        <NavContainer>
          <LogoLink href="/#" aria-label={logoDescription}>
            <Logo src={logoSrc} alt={logoDescription} />
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
    )}
  </ScrollContext.Consumer>
)

TopNavigation.defaultProps = {
  links: [],
}

export default withQuery(TopNavigation, useQuery)
