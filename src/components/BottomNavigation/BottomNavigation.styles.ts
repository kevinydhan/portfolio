import styled from 'styled-components'
import { rem } from 'polished'
import { mediaQueries } from '$theme'
import { BottomNavigationRootProps } from './BottomNavigation.d'

export const Root = styled('nav')<BottomNavigationRootProps>`
  ${mediaQueries.mobile} {
    position: fixed;
    bottom: 0;
    z-index: 999;
    width: 100%;
    height: ${({ height }) => rem(height)};
    background: ${({ theme }) => theme.colors.background};
    box-shadow: ${({ theme }) => theme.boxShadows.bottomNavigation};
  }

  ${mediaQueries.desktop} {
    display: none;
  }
`

Root.defaultProps = {
  height: 80,
}

export const List = styled('ul')`
  display: flex;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const ListItem = styled('li')`
  flex: 1;
  height: 100%;
`

export const Link = styled('a')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  height: 100%;
  padding: ${rem(14)} 0;
  color: ${({ theme }) => theme.colors.link};
  font-size: ${rem(14)};
  text-decoration: none;

  svg {
    width: ${rem(30)};
  }
`