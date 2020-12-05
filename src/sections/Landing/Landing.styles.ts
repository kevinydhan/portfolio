import { em, rem } from 'polished'
import styled from 'styled-components'
import { Button, TopNavigationRoot } from '$components'
import { createMediaQuery as media, mediaQueries } from '$theme'

export const Root = styled('section')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: ${rem(580)};
  height: calc(100vh - ${rem(TopNavigationRoot.defaultProps.height)});

  ${mediaQueries.mobile} {
    min-height: ${rem(320)};
  }

  ${mediaQueries.desktop} {
    min-height: ${rem(568)};
    max-height: ${rem(812)};
  }
`

export const Heading = styled('h1')`
  margin-top: 0;
  margin-bottom: ${rem(16)};
  font-size: ${rem(46)};

  ${media({ minWidthKey: 'md-0' })} {
    margin-bottom: ${rem(28)};
    font-size: ${rem(52)};
  }
`

export const Description = styled('p')`
  display: block;
  margin-top: 0;
  margin-bottom: ${rem(60)};
  font-size: ${rem(18)};

  ${media({ minWidthKey: 'md-0' })} {
    font-size: ${rem(20)};
  }
`

export const CTAButton = styled(Button)`
  ${media({ maxWidthKey: 'sm-1' })} {
    padding: ${em(16)} 0;

    & + & {
      margin-top: ${rem(8)};
    }
  }

  ${media({ minWidthKey: 'sm-1' })} {
    display: inline-block;
    min-width: ${rem(200)};
    padding: ${em(18)} 0;

    & + & {
      margin-left: ${rem(12)};
    }
  }
`
