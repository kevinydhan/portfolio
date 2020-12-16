import { em, rem } from 'polished'
import styled from 'styled-components'
import { Button } from '$components'
import {
  convertNumberToPercent as percent,
  createMediaQuery as media,
} from '$theme'
import { Root as ProjectImageRoot } from '../ProjectImage/ProjectImage.styles'
import type { ProjectRootProps } from './Project.d'

export const Root = styled('div')<ProjectRootProps>`
  & + & {
    margin-top: ${rem(100)};
  }

  ${media({ maxWidthKey: 'md-1', minWidthKey: 'md-0' })} {
    & + & {
      margin-top: ${rem(160)};
    }
  }

  ${media({ minWidthKey: 'md-1' })} {
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
  ${media({ minWidthKey: 'md-1' })} {
    width: ${percent(1 - Root.defaultProps.imageWidth + 0.03)};
    max-width: ${rem(520)};
  }
`

export const Heading = styled('h3')`
  margin-top: 0;
  margin-bottom: ${rem(16)};
  font-size: ${rem(26)};

  ${media({ minWidthKey: 'md-0' })} {
    font-size: ${rem(30)};
  }
`

export const Description = styled('p')`
  margin-top: 0;
  margin-bottom: ${rem(24)};

  ${media({ minWidthKey: 'md-1' })} {
    margin-bottom: ${rem(32)};
  }
`

export const ButtonContainer = styled('div')`
  ${media({ minWidthKey: 'sm-1' })} {
    display: flex;
  }
`

export const CTAButton = styled(Button)`
  padding: ${em(14)} 0;

  ${media({ maxWidthKey: 'sm-1' })} {
    & + & {
      margin-top: ${rem(8)};
    }
  }

  ${media({ minWidthKey: 'sm-1' })} {
    flex: 1;
    max-width: ${rem(140)};

    & + & {
      margin-left: ${rem(8)};
    }
  }
`
