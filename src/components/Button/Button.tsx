import React, { FunctionComponent } from 'react'
import { ButtonProps } from './Button.d'
import { Root, Text } from './Button.styles'

const Button: FunctionComponent<ButtonProps> = ({
  className,
  href,
  innerText,
  rel,
  target,
}) => {
  return (
    <Root className={className} href={href} target={target} rel={rel}>
      <Text>{innerText?.text}</Text>
    </Root>
  )
}

export default Button
