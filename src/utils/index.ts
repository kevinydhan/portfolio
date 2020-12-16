import { createElement } from 'react'
import type { WithQuery } from '$typings'

/**
 * Returns a higher-order component which invokes the input hook and renders
 * the input component with the return value from the hook invocation.
 *
 * This higher-order component was created to decouple Gatsby's
 * `useStaticQuery()` hook from the base component.
 *
 * @param Component - Base component
 * @param useQueryHook - React hook returning the component's `props`
 *
 * @see <br>
 * - [React Docs - Element Factories][element-factories]
 * - [React Docs - React Without JSX][without-jsx]
 * - [React Docs - Higher-Order Components][higher-order-component]
 * - [React Docs - `displayName`][display-name]
 *
 * [element-factories]: https://reactjs.org/warnings/legacy-factories.html
 * [without-jsx]: https://reactjs.org/docs/react-without-jsx.html
 * [higher-order-component]: https://reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging
 * [display-name]: https://reactjs.org/docs/react-component.html#displayname
 */
export const withQuery: WithQuery = (Component, useQueryHook) => {
  const WithQueryHOC = () => createElement(Component, useQueryHook())
  const componentName = Component.displayName || Component.name || 'Component'

  WithQueryHOC.displayName = `WithQuery${componentName}`

  console.log(WithQueryHOC.displayName)

  return WithQueryHOC
}
