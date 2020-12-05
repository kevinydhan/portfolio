import { rem } from 'polished'
import styled from 'styled-components'
import { createMediaQuery as media, mediaQueries } from '$theme'

export const Heading = styled('h2')`
  margin-top: 0;
  margin-bottom: ${rem(36)};
  font-size: ${rem(36)};

  ${mediaQueries.desktop} {
    margin-top: ${rem(120)};
  }

  ${media({ minWidthKey: 'md-0' })} {
    margin-bottom: ${rem(60)};
    font-size: ${rem(42)};
  }
`
