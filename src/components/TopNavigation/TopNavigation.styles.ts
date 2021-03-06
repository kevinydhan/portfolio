import { position, rem } from 'polished'
import styled from 'styled-components'
import {
  contentContainerMixin,
  getBoxShadow,
  getColor,
  getOpacity,
  getTransition,
  mediaQueries,
} from '$theme'
import type { TopNavigationRootProps as RootProps } from './TopNavigation.d'

export const Root = styled('header').withConfig({
  shouldForwardProp: (prop, validate) => {
    return !['height'].includes(prop) && validate(prop)
  },
})<RootProps>`
  ${mediaQueries.mobile} {
    display: none;
  }

  ${mediaQueries.desktop} {
    ${position('fixed', 0, 0, null, 0)}
    z-index: 999;
    height: ${({ height }) => rem(height)};
    background: ${getColor('background')};
    box-shadow: ${getBoxShadow('topNavigation')};
    transform: ${({ isScrollingDown, height }) => {
      const translateValue = isScrollingDown ? rem(height * -1) : 0
      return `translateY(${translateValue})`
    }};
    transition: ${getTransition('navigationHide')};
  }
`

Root.defaultProps = {
  height: 80,
}

export const NavContainer = styled('div')`
  ${contentContainerMixin}

  display: flex;
  justify-content: space-between;
  height: 100%;
`

export const Logo = styled('img').attrs({
  height: 44,
  width: 40,
})`
  width: ${({ width }) => rem(width)};
  height: ${({ height }) => rem(height)};
`

export const LogoLink = styled('a')`
  display: flex;
  align-items: center;

  ${Logo} {
    transform: translateY(0);
    opacity: 1;
    transition: ${getTransition('logoHover')};
  }

  &:hover,
  &:active {
    ${Logo} {
      transform: translateY(${rem(-4)});
      opacity: 0.5;
    }
  }
`

export const Nav = styled('nav')`
  height: 100%;
`

export const List = styled('ul')`
  display: flex;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const ListItem = styled('li')`
  height: 100%;

  & + & {
    margin-left: ${rem(64)};
  }
`

export const LinkText = styled('span')`
  font-size: ${rem(17)};
  opacity: 1;
  transition: ${getTransition('linkTextHover')};
`

export const Link = styled('a')`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;

  &::after {
    ${position('absolute', null, 0, 0, 0)}
    height: ${rem(2)};
    background: ${getColor('link')};
    transform: scaleX(0);
    transform-origin: right;
    transition: ${getTransition('linkHover')};
    content: '';
  }

  &:hover,
  &:active {
    ${LinkText} {
      opacity: ${getOpacity('linkTextHover')};
    }

    &::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`
