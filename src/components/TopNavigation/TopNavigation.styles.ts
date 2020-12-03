import { em, position, rem, rgba, transitions } from 'polished'
import styled from 'styled-components'

import { contentContainerMixin, mediaQueries } from '$theme'

import { TopNavigationRootProps } from './TopNavigation.d'

export const Root = styled('header')<TopNavigationRootProps>`
  ${mediaQueries.mobile} {
    display: none;
  }

  ${mediaQueries.desktop} {
    ${position('fixed', 0, 0, null, 0)}
    z-index: 999;
    height: ${({ height }) => rem(height)};
    background: ${({ theme }) => theme.colors.background};
    box-shadow: ${({ theme }) => theme.boxShadows.primary};
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

export const LogoLink = styled('a')`
  display: flex;
  align-items: center;

  svg {
    width: auto;
    height: ${rem(48)};
    transform: translateY(0);
    ${transitions(['opacity', 'transform'], '100ms ease-in')}
    opacity: 1;
  }

  &:hover,
  &:active {
    svg {
      transform: translateY(-${rem(4)});
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

export const Link = styled('a')`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  color: ${({ theme }) => theme.colors.link};
  font-size: ${rem(17)};
  letter-spacing: ${em(0.64, 17)};
  text-decoration: none;

  ${transitions(['color'], '125ms ease-in')}

  &::after {
    ${position('absolute', null, 0, 0, 0)}
    height: ${rem(4)};
    background: ${({ theme }) => theme.colors.link};
    transform: scaleX(0);
    transform-origin: right;
    ${transitions(['transform'], '125ms ease-in')}
    content: '';
  }

  &:hover,
  &:active {
    color: ${({ theme }) => rgba(theme.colors.link, 0.5)};

    &::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`
