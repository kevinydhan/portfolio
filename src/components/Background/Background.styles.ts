import styled from 'styled-components'
import { position } from 'polished'
import { mainGridMixin } from '$theme'

export const Root = styled('div')`
  ${mainGridMixin}

  ${position('absolute', 0, null)}
  z-index: -999;
  width: 100%;
`

export const Column = styled('div')`
  border-right: ${({ theme }) => theme.borders.gridlines};

  &:first-of-type {
    border-left: ${({ theme }) => theme.borders.gridlines};
  }

  @media screen and (max-width: 767px) {
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      display: none;
    }
  }
`
