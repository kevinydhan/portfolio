import PropTypes from 'prop-types'

/**
 * Defines the type of React children passed as props between components.
 */
export const PropTypeReactChildren = PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
])

export const IconLink = PropTypes.shape({
    type: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    target: PropTypes.string,
    rel: PropTypes.string,
    'aria-label': PropTypes.string,
})
