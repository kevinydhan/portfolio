import React, { FunctionComponent } from 'react'
import type { ButtonProps as Props } from './Button.d'
import { Background, Root, Text } from './Button.styles'

const Button: FunctionComponent<Props> = ({
  className,
  href,
  innerText,
  rel,
  target,
}) => (
  <Root className={className} href={href} target={target} rel={rel}>
    <Background />
    <Text>{innerText?.text}</Text>
  </Root>
)

export default Button
