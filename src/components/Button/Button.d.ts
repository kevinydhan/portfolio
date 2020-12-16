import type { HTMLAttributes } from 'react'
import type { LinkFragment } from '$typings'

export interface ButtonProps
  extends LinkFragment,
    Pick<HTMLAttributes<HTMLElement>, 'className'> {}
