import { useState, useEffect, useCallback, useMemo } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

/**
 * Creates an `IntersectionObserver`. Returns an object literal with the
 * following keys:
 * - `observeElement`: Function that takes in an HTML element as an argument
 *   and invokes `new IntersectionObserver().observe()` on the element
 *
 * @param {(entries) => void} callback - Callback function to be invoked by
 * `IntersectionObserver`
 * @param {object} options - Options for `IntersectionObserver`
 *
 * @returns {object} - Object literal
 */
export const useObserver = (callback, options = {}) => {
    const [observer, setObserver] = useState(null)

    useEffect(() => {
        const o = new IntersectionObserver(callback, options)
        setObserver(o)

        return () => {
            o.disconnect()
            setObserver(null)
        }
    }, [])

    const observeElement = useCallback(
        (ref) => {
            if (observer) observer.observe(ref)
        },
        [observer]
    )

    return { observeElement }
}

/**
 * Creates and executes Gatsby's GraphQL query.
 */
export const useQuery = () => {
    const data = useStaticQuery(graphql`
        query getImages {
            ogImage: file(relativePath: { eq: "og.png" }) {
                childImageSharp {
                    fixed(width: 1100, height: 600) {
                        srcWebp
                    }
                }
            }
            projectImages: allImageSharp(
                filter: {
                    fluid: { originalName: { regex: "/project-image/" } }
                }
            ) {
                nodes {
                    fluid(maxWidth: 339, maxHeight: 182, quality: 80) {
                        srcWebp
                    }
                }
            }
        }
    `)

    const queryData = useMemo(() => formatQuerySearchResults(data), [])
    return queryData
}

const formatQuerySearchResults = ({ ogImage, projectImages }) => {
    const regex = RegExp(/project-image-[-\w]{1,}/gi)

    let key
    const projectImageSrc = projectImages.nodes.reduce((map, node) => {
        key = node.fluid.srcWebp.match(regex)
        map[key] = node.fluid.srcWebp
        return map
    }, {})

    return {
        projectImageSrc,
        ogImage: ogImage.childImageSharp.fixed.srcWebp,
    }
}
