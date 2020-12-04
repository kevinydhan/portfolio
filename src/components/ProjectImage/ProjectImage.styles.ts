import { rem } from 'polished'
import styled from 'styled-components'
import { createMediaQuery as media } from '$theme'

export const Root = styled('picture')`
  display: block;
  height: 100%;
  margin-bottom: ${rem(20)};

  ${media({ maxWidthKey: 'md-1', minWidthKey: 'md-0' })} {
    margin-bottom: ${rem(32)};
  }
`

export const Image = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: contain;
`
