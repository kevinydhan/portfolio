import { rem } from 'polished'
import styled from 'styled-components'

export const Root = styled('picture')`
  display: block;
  height: 100%;
  margin-bottom: ${rem(20)};

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    margin-bottom: ${rem(32)};
  }
`

export const Image = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: contain;
`
