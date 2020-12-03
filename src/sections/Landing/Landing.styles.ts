import styled from 'styled-components'
import { em, rem } from 'polished'
import { TopNavigationRoot } from '$components'

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
  display: block;
  padding: ${rem(16)} 0;
  color: ${({ theme }) => theme.colors.link};
  font-weight: 600;
  font-size: ${rem(17)};
  letter-spacing: ${em(0.64, 17)};
  text-align: center;
  text-decoration: none;
  background: ${({ theme }) => theme.colors.background};
  border: ${rem(1)} solid #000;

  @media screen and (max-width: 567px) {
    & + & {
      margin-top: ${rem(8)};
    }
  }

  @media screen and (min-width: 568px) {
    display: inline-block;
    min-width: ${rem(200)};

    & + & {
      margin-left: ${rem(12)};
    }
  }
`
