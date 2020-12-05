import { position, rem, transitions } from 'polished'
import styled from 'styled-components'
import { contentContainerMixin, getColor, mediaQueries } from '$theme'
import { TopNavigationRootProps } from './TopNavigation.d'

export const Root = styled('header').withConfig({
  shouldForwardProp: (prop, validate) => {
    return !['height'].includes(prop) && validate(prop)
  },
})<TopNavigationRootProps>`
  ${mediaQueries.mobile} {
    display: none;
  }

  ${mediaQueries.desktop} {
    ${position('fixed', 0, 0, null, 0)}
    z-index: 999;
    height: ${({ height }) => rem(height)};
    background: ${getColor('background')};
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
    transform: translateY(0);
    ${transitions(['opacity', 'transform'], '100ms ease-in')}
    opacity: 1;
  }

  &:hover,
  &:active {
    svg {
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
  ${transitions(['opacity'], '125ms ease-in')}
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
    ${transitions(['transform'], '125ms ease-in')}
    content: '';
  }

  &:hover,
  &:active {
    ${LinkText} {
      opacity: 0.5;
    }

    &::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`
