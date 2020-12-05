import { position } from 'polished'
import styled from 'styled-components'
import { createMediaQuery as media, getBorder, mainGridMixin } from '$theme'

export const Root = styled('div')`
  ${mainGridMixin}

  ${position('absolute', 0, null)}
  z-index: -999;
  width: 100%;
`

export const Column = styled('div')`
  border-right: ${getBorder('gridlines')};

  &:first-of-type {
    border-left: ${getBorder('gridlines')};
  }

  ${media({ maxWidthKey: 'md-0' })} {
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      display: none;
    }
  }
`
