import styled from 'styled-components'
import { rem } from 'polished'

export const Heading = styled('h2')`
  margin-top: 0;
  margin-bottom: ${rem(36)};
  font-weight: 600;
  font-size: ${rem(36)};
  line-height: 1;

  @media screen and (min-width: 768px) {
    margin-bottom: ${rem(28)};
    font-size: ${rem(48)};
  }

  @media screen and (min-width: 1024px) {
    margin-bottom: ${rem(60)};
  }
`
