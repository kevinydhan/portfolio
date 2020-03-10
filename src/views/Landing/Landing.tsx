import React, { createRef, useEffect } from 'react'
import { Root } from './Landing.styled'

export interface LandingProps {
    setIsLandingIntersecting: React.Dispatch<React.SetStateAction<boolean>>
}

/**
 * @todo - Refactor `IntersectionObserver` out of component and have it as its
 *         own standalone component. Other components can be able to subscribe
 *         and interact with the new IntersectionObserver component.
 *
 * @param {LandingProps} props
 */
function Landing(props: LandingProps): React.ReactElement {
    const { setIsLandingIntersecting } = props

    const ref: React.RefObject<HTMLDivElement> = createRef()

    useEffect(() => {
        const observer: IntersectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsLandingIntersecting(entry.isIntersecting)
                })
            },
            { rootMargin: '-68px 0px 0px 0px' }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }
    }, [ref, setIsLandingIntersecting])

    return <Root ref={ref} />
}

export default Landing
