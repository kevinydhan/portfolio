import { useObserver, useQuery } from './hooks'
import { PropTypeProject } from './types'
export { useObserver, useQuery, PropTypeProject }

/**
 * Generates a key that is passed to the React element.
 *
 * @example
 * generateKey('My example project', 1) // 'My-example-project-1'
 * generateKey('String', 2) // 'String-2'
 *
 * @param {string} str - String that acts as a somewhat unique identifier
 * @param {string | number} i - Index number
 *
 * @returns {string} - Key
 */
export const generateKey = (str, i) => `${str.split(' ').join('-')}-${i}`

/**
 * Returns a callback function for `React.memo` to check whether every current
 * prop is equal to the incoming prop.
 *
 * @example
 * const MyComponent = (props) => {...}
 * MyComponent.propTypes = {
 *     title: PropTypes.string.isRequired,
 *     isNavbarHidden: PropTypes.bool.isRequired,
 * }
 *
 * export default React.memo(MyComponent, arePropsEqual(['title', 'isNavbarHidden']))
 *
 * @param {Array<string>} propKeys - Array of prop keys
 *
 * @returns {boolean} - If `true`, the component will render
 */
export const arePropsEqual = (propKeys = []) => (prevProps, nextProps) => {
    const keys = propKeys

    for (let i = 0; i < keys.length; ++i) {
        if (prevProps[keys[i]] !== nextProps[keys[i]]) return false
    }

    return true
}
