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
            <img
              src={link.icon.svg.dataURI}
              alt={link.icon.description}
              width="30"
              height="30"
            />
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
