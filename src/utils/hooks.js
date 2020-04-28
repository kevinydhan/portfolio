import { useEffect, useState, useCallback } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

/**
 * Creates an `IntersectionObserver`. Returns an object literal with the
 * following properties:
 * - `observeElement`
 *
 * @returns {Object<{ observeElement: (HTMLElement) => void }>} -
 */
export const useObserver = () => {
    const [observer, setObserver] = useState(null)

    const options = { threshold: 0.625 }

    const handleEvents = useCallback((entries) => {
        console.log(entries)
    })

    useEffect(() => {
        setObserver(new IntersectionObserver(handleEvents, options))
    }, [])

    const observeElement = (ref) => {
        if (observer) observer.observe(ref)
    }

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
        }
    `)

    return {
        ogImage: data.ogImage.childImageSharp.fixed.srcWebp,
    }
}
