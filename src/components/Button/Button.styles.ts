import { position, rem, transitions } from 'polished'
import styled from 'styled-components'
import { getColor } from '$theme'

export const Text = styled('span')`
  display: inline-block;
  transform: translateX(0);
  opacity: 1;
  ${transitions(['opacity', 'transform'], '125ms ease-out')}

  &::after {
    position: absolute;
    left: 100%;
    opacity: 0;
    content: '→';
    ${transitions('opacity 125ms ease-out', 'transform 125ms ease-out 175ms')}
  }
`

export const Background = styled('span')`
  ${position('absolute', 0, 0, 0, 0)}
  z-index: -1;
  background: ${getColor('background')};
`

export const Root = styled('a').attrs({
  /**
   * Determines the time, in milliseconds, of a single border's transition.
   */
  transitionTiming: 90,
})`
  position: relative;
  display: block;
  font-weight: 600;
  text-align: center;

  &::before,
  &::after,
  ${Background}::before, ${Background}::after {
    position: absolute;
    z-index: 1;
    background: ${getColor('link')};
    ${({ transitionTiming }) => {
      return transitions(['transform'], `${transitionTiming}ms ease-out`)
    }}
    content: '';
  }

  /* Top and bottom borders */
  &::before,
  ${Background}::before {
    right: 0;
    left: 0;
    height: ${rem(1)};
    transform: scaleX(1);
  }

  /* Left and right borders */
  &::after,
  ${Background}::after {
    top: 0;
    bottom: 0;
    width: ${rem(1)};
    transform: scaleY(1);
  }

  /* Top border during neutral state */
  &::before {
    top: 0;
    transform-origin: right;
    transition-delay: ${({ transitionTiming }) => transitionTiming * 3 + 'ms'};
  }

  /* Right border during neutral state */
  &::after {
    right: 0;
    transform-origin: bottom;
    transition-delay: ${({ transitionTiming }) => transitionTiming * 2 + 'ms'};
  }

  /* Bottom border during neutral state */
  ${Background}::before {
    bottom: 0;
    transform-origin: left;
    transition-delay: ${({ transitionTiming }) => transitionTiming * 1 + 'ms'};
  }

  /* Left border during neutral state */
  ${Background}::after {
    left: 0;
    transform-origin: top;
  }

  &:hover,
  &:active {
    ${Text} {
      transform: translateX(${rem(4)});
      opacity: 0.6;
      transition-delay: 225ms;

      &::after {
        transform: translateX(${rem(8)});
        opacity: 1;
        transition-delay: 225ms;
      }
    }

    /* Top border during active state */
    &::before {
      transform: scaleX(0);
      transform-origin: right;
      transition-delay: 0ms;
    }

    /* Right border during active state */
    &::after {
      transform: scaleY(0);
      transform-origin: bottom;
      transition-delay: ${({ transitionTiming }) =>
        transitionTiming * 1 + 'ms'};
    }

    /* Bottom border during active state */
    ${Background}::before {
      transform: scaleX(0);
      transform-origin: left;
      transition-delay: ${({ transitionTiming }) =>
        transitionTiming * 2 + 'ms'};
    }

    /* Left border during active state */
    ${Background}::after {
      transform: scaleY(0);
      transform-origin: top;
      transition-delay: ${({ transitionTiming }) =>
        transitionTiming * 3 + 'ms'};
    }
  }
`
