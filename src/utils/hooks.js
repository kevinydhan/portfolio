import { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import projectData from '@data/projects.yml'

/**
 * Creates a counter that increments every time the component is rendered. The
 * function logs the total number of times the component rendered after each
 * increment.
 *
 * **This hook is used for development purposes only.**
 *
 * @example
 * const MyComponent = () => {
 *     useRenderCounter('MyComponent')
 *     ...
 * }
 *
 * @param {string} componentName - Name of the component
 *
 * @returns {void}
 */
export const useRenderCounter = (componentName) => {
    const counter = useRef(0)
    const increment = () => counter.current++
    increment()
    console.log(
        `${componentName} component was rendered ${counter.current} time(s).`
    )
}

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
            ogImageSrc: file(relativePath: { eq: "og.png" }) {
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

const formatQuerySearchResults = ({ ogImageSrc, projectImages }) => {
    const regex = RegExp(/project-image-[-\w]{1,}/gi)

    let key
    const projectImageSrc = projectImages.nodes.reduce((map, node) => {
        key = node.fluid.srcWebp.match(regex)
        map[key] = node.fluid.srcWebp
        return map
    }, {})

    const projects = projectData.projects.map((project) => ({
        ...project,
        imgSrc: projectImageSrc[project.originalImgName],
    }))

    return {
        projects,
        ogImageSrc: ogImageSrc.childImageSharp.fixed.srcWebp,
    }
}
