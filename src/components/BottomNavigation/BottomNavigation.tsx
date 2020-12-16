import React, { FunctionComponent } from 'react'
import { ScrollContext } from '$context'
import { withQuery } from '$utils'
import type { BottomNavigationProps as Props } from './BottomNavigation.d'
import useQuery from './BottomNavigation.query'
import { Link, List, ListItem, Root } from './BottomNavigation.styles'

const BottomNavigation: FunctionComponent<Props> = ({ links }) => (
  <ScrollContext.Consumer>
    {({ isScrollingDown }) => (
      <Root isScrollingDown={isScrollingDown}>
        <List>
          {links.map((link) => (
            <ListItem key={link.id}>
              <Link href={link.href} target={link.target} rel={link.rel}>
                <img
                  src={link.icon.svg.dataURI}
                  alt={link.icon.description}
                  width="20"
                  height="20"
                />
                <span>{link.name}</span>
              </Link>
            </ListItem>
          ))}
        </List>
      </Root>
    )}
  </ScrollContext.Consumer>
)

BottomNavigation.defaultProps = {
  links: [],
}

export default withQuery<Props>(BottomNavigation, useQuery)
