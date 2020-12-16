import type { FunctionComponent } from 'react'

/**
 * @template Props - React component `props`
 */
type WithQuery = <Props = Record<string, never>>(
  Component: FunctionComponent<Props>,
  useQueryHook: () => Props
) => FunctionComponent
