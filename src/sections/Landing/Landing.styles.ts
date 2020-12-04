import { em, padding, rem } from 'polished'
import styled from 'styled-components'
import { TopNavigationRoot } from '$components'
import { primaryButtonMixin } from '$theme'

export const Root = styled('section')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: ${rem(580)};
  height: calc(100vh - ${rem(TopNavigationRoot.defaultProps.height + 40)});
  min-height: ${rem(568)};
  max-height: ${rem(812)};
`

export const Heading = styled('h1')`
  margin-top: 0;
  margin-bottom: ${rem(16)};
  font-weight: 600;
  font-size: ${rem(46)};
  line-height: 1;

  @media screen and (min-width: 768px) {
    margin-bottom: ${rem(28)};
    font-size: ${rem(52)};
  }
`

export const Description = styled('p')`
  display: block;
  margin-top: 0;
  margin-bottom: ${rem(60)};
  font-size: ${rem(18)};
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    font-size: ${rem(20)};
  }
`

export const Button = styled('a')`
  @media screen and (max-width: 567px) {
    ${padding(em(16), 0)}

    & + & {
      margin-top: ${rem(8)};
    }
  }

  @media screen and (min-width: 568px) {
    display: inline-block;
    min-width: ${rem(200)};
    ${padding(em(17), 0)}

    & + & {
      margin-left: ${rem(12)};
    }
  }

  ${primaryButtonMixin}
`
