import styled from 'styled-components'
import { rem } from 'polished'

export const Root = styled('picture')`
  display: block;
  height: 100%;

  margin-bottom: ${rem(20)};
`

export const Image = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: contain;
`
