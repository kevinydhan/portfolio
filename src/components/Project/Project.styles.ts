import styled from 'styled-components'
import { em, padding, rem } from 'polished'
import { Root as ProjectImageRoot } from '../ProjectImage/ProjectImage.styles'
import { convertNumberToPercent as percent } from '$theme'

export const Root = styled('div').attrs({
  imageOffset: -0.055,
  imageWidth: 0.61,
})`
  & + & {
    margin-top: ${rem(100)};
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & + & {
      margin-top: ${rem(240)};
    }

    ${ProjectImageRoot} {
      width: ${({ imageWidth }) => percent(imageWidth)};
      max-width: ${rem(878.5)};
    }

    &:nth-child(2n + 1) {
      ${ProjectImageRoot} {
        margin-left: ${({ imageOffset }) => percent(imageOffset)};
      }
    }

    &:nth-child(2n) {
      flex-direction: row-reverse;

      ${ProjectImageRoot} {
        margin-right: ${({ imageOffset }) => percent(imageOffset)};
      }
    }
  }
`

export const Content = styled('div')`
  @media screen and (min-width: 1024px) {
    width: ${percent(1 - Root.attrs[0].imageWidth)};
    max-width: ${rem(520)};
  }
`

export const Heading = styled('h3')`
  margin-top: 0;
  margin-bottom: ${rem(16)};
  font-weight: 600;
  font-size: ${rem(24)};
  line-height: 1;

  @media screen and (min-width: 768px) {
    font-size: ${rem(30)};
  }
`

export const Description = styled('p')`
  margin-top: 0;
  margin-bottom: ${rem(24)};
  font-size: ${rem(16)};
  line-height: 1.5;
  letter-spacing: 0.016em;

  @media screen and (min-width: 768px) {
    font-size: ${rem(17)};
  }
`

export const List = styled('dl')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 0;
  margin-bottom: ${rem(40)};
`

export const Bold = styled('dt')`
  grid-column: 1 / 3;
  margin-bottom: ${rem(8)};
  font-weight: 600;
`

export const ListItem = styled('dd')`
  display: flex;
  align-items: center;
  margin: 0;
  font-size: ${rem(16)};
  line-height: 1.5;

  &::before {
    margin-right: ${rem(10)};
    content: '▪';
  }
`

export const Button = styled('a')`
  display: block;
  ${padding(rem(16), 0)}
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
    min-width: ${rem(140)};

    &:not(:last-child) {
      margin-right: ${rem(12)};
    }
  }
`
