import React, { FunctionComponent, ReactNode } from 'react'
import type { BackgroundProps as Props } from './Background.d'
import { Column, Root } from './Background.styles'

const Background: FunctionComponent<Props> = ({ maxGridColumns }) => {
  const array = Array(maxGridColumns).fill(0)
  const gridColumns: ReactNode[] = array.map((_, i) => (
    <Column key={`background-grid-column-${i}`} />
  ))

  return <Root>{gridColumns}</Root>
}

Background.defaultProps = {
  maxGridColumns: 4,
}

export default Background
