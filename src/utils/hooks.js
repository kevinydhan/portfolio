import { useEffect, useState, useCallback } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const updateStripeColor = (color) => {
    document.querySelector('.bg-stripe').style.fill = color
}

const updateTrapezoidOpacities = (color) => {
    const trapezoids = [...document.querySelectorAll('.bg-trapezoid')]

    trapezoids.forEach((trapezoid) => {
        trapezoid.style.opacity = trapezoid.className.baseVal.includes(color)
            ? 1
            : 0
    })
}

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
    const regex = RegExp(/project-card--[\w]{1,}/gi)

    const handleEvents = useCallback((entries) => {
        entries.forEach((entry) => {
            const { isIntersecting, target } = entry
            const className = target.className.match(regex)

            if (isIntersecting && className) {
                switch (className[0]) {
                    case 'project-card--lightblue':
                        updateStripeColor('rgba(13, 136, 255, 0.1)')
                        updateTrapezoidOpacities('lightblue')
                        break
                    case 'project-card--yellow':
                        updateStripeColor('rgba(234, 255, 25, 0.07)')
                        updateTrapezoidOpacities('yellow')
                        break
                    case 'project-card--red':
                        updateStripeColor('rgba(179, 68, 9, 0.12)')
                        updateTrapezoidOpacities('red')
                        break
                }
            } else if (isIntersecting) {
                updateStripeColor('#010027')
                updateTrapezoidOpacities('midnightblue')
            }
        })
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
            projectImages: allImageSharp {
                nodes {
                    fluid(maxWidth: 339, maxHeight: 182, quality: 80) {
                        srcWebp
                    }
                }
            }
        }
    `)

    const regex = new RegExp(/project-image-[-\w]{1,}/)

    return {
        ogImage: data.ogImage.childImageSharp.fixed.srcWebp,
        projectImageSrc: data.projectImages.nodes
            .map((node) => node.fluid.srcWebp)
            .filter((srcWebp) => srcWebp.includes('project-image'))
            .reduce((hash, src) => {
                const key = src.match(regex)[0]

                if (!hash[key]) hash[key] = src
                else console.warn(`${key} is already registered.`)

                return hash
            }, {}),
    }
}
