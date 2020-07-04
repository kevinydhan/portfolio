import PropTypes from 'prop-types'

export const ReactChildrenPropType = [
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
]

export const GenericLinkPropType = {
    href: PropTypes.string.isRequired,
    target: PropTypes.oneOf(['_blank']),
    rel: PropTypes.string,
}

export const GatsbyImageSharpFluidPropType = {
    aspectRatio: PropTypes.number,
    base64: PropTypes.string,
    sizes: PropTypes.string,
    src: PropTypes.string,
    srcSet: PropTypes.string,
}
