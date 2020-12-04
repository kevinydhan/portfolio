import { padding, rem } from 'polished'
import { css } from 'styled-components'

export const primaryButtonMixin = css`
  display: block;
  ${padding(rem(16), 0)}
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  background: ${({ theme }) => theme.colors.background};
  border: ${({ theme }) => `${rem(1)} solid ${theme.colors.link}`};
`
