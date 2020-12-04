import { rem, transitions } from 'polished'
import styled from 'styled-components'

export const Text = styled('span')`
  opacity: 1;
  ${transitions(['opacity'], '125ms ease-in')}
`

export const Root = styled('a').attrs({
  /**
   * Determines the time, in milliseconds, of a single border's transition.
   */
  transitionTiming: 125,
})`
  position: relative;
  display: block;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  background: ${({ theme }) => theme.colors.background};

  &::before,
  &::after,
  ${Text}::before, ${Text}::after {
    position: absolute;
    z-index: 1;
    background: ${({ theme }) => theme.colors.link};
    ${({ transitionTiming }) => {
      return transitions(['transform'], `${transitionTiming}ms ease-out`)
    }}
    content: '';
  }

  /* Top and bottom borders */
  &::before,
  ${Text}::before {
    right: 0;
    left: 0;
    height: ${rem(1)};
    transform: scaleX(1);
  }

  /* Left and right borders */
  &::after,
  ${Text}::after {
    top: 0;
    bottom: 0;
    width: ${rem(1)};
    transform: scaleY(1);
  }

  /* Top border */
  &::before {
    top: 0;
    transform-origin: right;
    transition-delay: ${({ transitionTiming }) => transitionTiming * 3 + 'ms'};
  }

  /* Right border */
  &::after {
    right: 0;
    transform-origin: bottom;
    transition-delay: ${({ transitionTiming }) => transitionTiming * 2 + 'ms'};
  }

  /* Bottom border */
  ${Text}::before {
    bottom: 0;
    transform-origin: left;
    transition-delay: ${({ transitionTiming }) => transitionTiming * 1 + 'ms'};
  }

  /* Left border */
  ${Text}::after {
    left: 0;
    transform-origin: top;
  }

  &:hover,
  &:active {
    ${Text} {
      opacity: 0.5;
    }

    /* Top border */
    &::before {
      transform: scaleX(0);
      transform-origin: right;
      transition-delay: 0ms;
    }

    /* Right border */
    &::after {
      transform: scaleY(0);
      transform-origin: bottom;
      transition-delay: ${({ transitionTiming }) =>
        transitionTiming * 1 + 'ms'};
    }

    /* Bottom border */
    ${Text}::before {
      transform: scaleX(0);
      transform-origin: left;
      transition-delay: ${({ transitionTiming }) =>
        transitionTiming * 2 + 'ms'};
    }

    /* Left border */
    ${Text}::after {
      transform: scaleY(0);
      transform-origin: top;
      transition-delay: ${({ transitionTiming }) =>
        transitionTiming * 3 + 'ms'};
    }
  }
`
