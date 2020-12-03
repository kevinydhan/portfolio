import { FunctionComponent, ReactElement } from 'react'

export type WithQuery<P> = (
  renderComponent: FunctionComponent<P>
) => () => ReactElement<P>
