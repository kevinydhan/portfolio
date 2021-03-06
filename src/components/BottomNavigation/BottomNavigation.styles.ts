import { rem } from 'polished'
import styled from 'styled-components'
import { getBoxShadow, getColor, getTransition, mediaQueries } from '$theme'
import type { BottomNavigationRootProps } from './BottomNavigation.d'

export const Root = styled('nav').withConfig({
  shouldForwardProp: (prop, validate) => {
    return !['height'].includes(prop) && validate(prop)
  },
})<BottomNavigationRootProps>`
  ${mediaQueries.mobile} {
    position: fixed;
    bottom: 0;
    z-index: 999;
    width: 100%;
    height: ${({ height }) => rem(height)};
    background: ${getColor('background')};
    box-shadow: ${getBoxShadow('bottomNavigation')};
    transform: ${({ isScrollingDown, height }) => {
      const translateValue = isScrollingDown ? rem(height) : 0
      return `translateY(${translateValue})`
    }};
    transition: ${getTransition('navigationHide')};
  }

  ${mediaQueries.desktop} {
    display: none;
  }
`

Root.defaultProps = {
  height: 56,
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
  padding: ${rem(8)} 0;
  font-size: ${rem(12)};
`
