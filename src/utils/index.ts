import PropTypes from 'prop-types'

/**
 * Defines the type of React children passed as props between components.
 */
export const PropTypeReactChildren = PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
])
