import { rem } from 'polished'
import styled from 'styled-components'

export const Root = styled('dl')`
  display: grid;
  grid-template-columns: 3fr 5fr;
  margin-top: 0;
  margin-bottom: ${rem(24)};
  font-size: ${rem(16)};
  line-height: 1.5;
`

export const Term = styled('dt')`
  font-weight: 600;
`

export const Detail = styled('dd')`
  margin: 0;
`
