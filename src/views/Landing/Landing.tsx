import React, { Component, createRef } from 'react'
import { Root } from './Landing.styled'

export interface LandingProps {
    handleScroll: IntersectionObserverCallback
}

export interface IntersectionObserverOptions {
    root?: HTMLElement
    rootMargin?: string
    threshold?: number
}

/**
 * @todo - Refactor `IntersectionObserver` out of component and have it as its
 *         own standalone component. Other components can be able to subscribe
 *         and interact with the new IntersectionObserver component.
 *
 * @param {LandingProps} props
 */
class Landing extends Component<LandingProps> {
    ref: React.RefObject<HTMLDivElement> = createRef()

    observer: IntersectionObserver | undefined

    observerOptions: IntersectionObserverOptions = {
        rootMargin: '-68px 0px 0px 0px',
    }

    componentDidMount(): void {
        const { handleScroll } = this.props
        const { ref, observerOptions } = this

        this.observer = new IntersectionObserver(handleScroll, observerOptions)

        if (ref.current) {
            this.observer.observe(ref.current)
        }
    }

    render(): React.ReactElement {
        const { ref } = this

        return <Root ref={ref} />
    }
}
export default Landing
