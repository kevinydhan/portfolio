import React, { FunctionComponent } from 'react'

import { BottomNavigationProps } from './BottomNavigation.d'
import withQuery from './BottomNavigation.query'
import { Link, List, ListItem, Root } from './BottomNavigation.styles'

const BottomNavigation: FunctionComponent<BottomNavigationProps> = ({
  links,
}) => (
  <Root>
    <List>
      {links.map((link) => (
        <ListItem key={link.id}>
          <Link href={link.href} target={link.target} rel={link.rel}>
            <span dangerouslySetInnerHTML={{ __html: link.icon.svg.content }} />
            <span>{link.name}</span>
          </Link>
        </ListItem>
      ))}
    </List>
  </Root>
)

BottomNavigation.defaultProps = {
  links: [],
}

export default withQuery(BottomNavigation)
