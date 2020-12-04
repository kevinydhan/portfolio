import { rem } from 'polished'
import styled, { css } from 'styled-components'
import {
  ProjectMetadataListDetailProps,
  ProjectMetadataListTermProps,
} from './ProjectMetadata.d'

export const Root = styled('dl')`
  display: grid;
  grid-template-columns: 3fr 4fr;
  margin-top: 0;
  margin-bottom: ${rem(40)};
  font-size: ${rem(14)};

  @media screen and (min-width: 768px) {
    margin-bottom: ${rem(28)};
    font-size: ${rem(16)};
  }

  @media screen and (min-width: 1024px) {
    margin-bottom: ${rem(32)};
  }
`

export const Term = styled('dt')<ProjectMetadataListTermProps>`
  grid-column: ${({ fullWidth }) => fullWidth && '1 / 3'};
`

Term.defaultProps = {
  fullWidth: false,
}

const detailBulletMixin = css`
  &::before {
    margin-right: ${rem(10)};
    content: '▪';
  }
`

export const Detail = styled('dd')<ProjectMetadataListDetailProps>`
  margin: 0;
  ${({ showBullet }) => showBullet && detailBulletMixin}
`

Detail.defaultProps = {
  showBullet: false,
}
