import { FunctionComponent, ReactElement } from 'react'

/**
 * @template Props - Component props.
 */
export type WithQuery<Props = Record<string, never>> = (
  renderComponent: FunctionComponent<Props>
) => () => ReactElement<Props>
