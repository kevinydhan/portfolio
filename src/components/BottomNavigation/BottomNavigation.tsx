import React, { FunctionComponent } from 'react'
import { ScrollContext } from '$context'
import { BottomNavigationProps } from './BottomNavigation.d'
import withQuery from './BottomNavigation.query'
import { Link, List, ListItem, Root } from './BottomNavigation.styles'

const BottomNavigation: FunctionComponent<BottomNavigationProps> = ({
  links,
}) => (
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

export default withQuery(BottomNavigation)
