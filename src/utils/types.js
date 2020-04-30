import PropTypes from 'prop-types'

/**
 * Defines the prop type schema for a project object.
 */
export const PropTypeProject = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    originalImgName: PropTypes.string.isRequired,
    className: PropTypes.string,
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    links: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
            target: PropTypes.string,
            rel: PropTypes.string,
        })
    ).isRequired,
}

/**
 * Defines the prop type schema for an icon link object.
 */
export const PropTypeIconLink = {
    type: PropTypes.oneOf([
        'linkedin',
        'github',
        'gitlab',
        'stackoverflow',
        'external',
        'figma',
    ]).isRequired,
    href: PropTypes.string.isRequired,
    target: PropTypes.string,
    rel: PropTypes.string,
    'aria-label': PropTypes.string,
}
