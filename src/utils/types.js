import PropTypes from 'prop-types'

export const ProjectPropType = {
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
