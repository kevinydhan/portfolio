import { HTMLAttributes } from 'react'
import { LinkFragment } from '$typings'

export interface ButtonProps
  extends LinkFragment,
    Pick<HTMLAttributes<HTMLElement>, 'className'> {}
