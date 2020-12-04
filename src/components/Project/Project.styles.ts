import { rem } from 'polished'
import styled from 'styled-components'
import { convertNumberToPercent as percent, primaryButtonMixin } from '$theme'
import { Root as ProjectImageRoot } from '../ProjectImage/ProjectImage.styles'
import { ProjectRootProps } from './Project.d'

export const Root = styled('div')<ProjectRootProps>`
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

Root.defaultProps = {
  imageOffset: -0.055,
  imageWidth: 0.61,
}

export const Content = styled('div')`
  @media screen and (min-width: 1024px) {
    width: ${percent(1 - Root.defaultProps.imageWidth + 0.03)};
    max-width: ${rem(520)};
  }
`

export const Heading = styled('h3')`
  margin-top: 0;
  margin-bottom: ${rem(16)};

  @media screen and (min-width: 768px) {
    font-size: ${rem(30)};
  }
`

export const Description = styled('p')`
  margin-top: 0;
  margin-bottom: ${rem(24)};

  @media screen and (min-width: 1024px) {
    margin-bottom: ${rem(32)};
  }
`

export const Button = styled('a')`
  @media screen and (max-width: 567px) {
    & + & {
      margin-top: ${rem(8)};
    }
  }

  @media screen and (min-width: 568px) {
    display: inline-block;
    min-width: ${rem(120)};

    &:not(:last-child) {
      margin-right: ${rem(8)};
    }
  }

  @media screen and (min-width: 1024px) {
    margin-top: ${rem(12)};
  }

  ${primaryButtonMixin}
`
