import { position, rem } from 'polished'
import styled from 'styled-components'
import { BottomNavigationRoot } from '$components'
import {
  contentContainerMixin,
  createMediaQuery as media,
  getColor,
  getOpacity,
  getTransition,
  mediaQueries,
} from '$theme'

export const Root = styled('footer')`
  ${contentContainerMixin}
  margin-bottom: ${rem(BottomNavigationRoot.defaultProps.height + 40)};

  ${mediaQueries.desktop} {
    margin-bottom: ${rem(40)};
  }
`

export const ListHeading = styled('h2')`
  margin-top: 0;
  margin-bottom: ${rem(16)};
  font-weight: 600;
  font-size: ${rem(20)};
  line-height: 1;

  ${media({ minWidthKey: 'md-0' })} {
    font-size: ${rem(24)};
  }
`

export const List = styled('ul')`
  padding: 0;
  list-style: none;
`

export const LinkText = styled('span')`
  opacity: 1;
  transition: ${getTransition('linkTextHover')};
`

export const Link = styled('a')`
  position: relative;

  &::after {
    ${position('absolute', '100%', 0, null, 0)}
    height: ${rem(1)};
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
