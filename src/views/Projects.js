// React modules
import React, { Component } from 'react'
import { ProjectList } from '@components'

// Styling modules
import styled, { css } from 'styled-components'
import { theme, Section } from '@theme'

// Misc. modules
import content from '@content/projects.yml'

// =============================================================================

/**
 * For this to work, each project in `projects.yml` must have a `imgSrc`
 * property set to the corresponding image file name.
 *
 * @example
 * imgSrc: project-mockup-small.png
 */
class Projects extends Component {
    observer = null
    threshold = [0.7, 0.5, 0.5, 0.5]

    componentDidMount() {
        const { handleObservedEntries, threshold } = this
        this.observer = new IntersectionObserver(handleObservedEntries, {
            threshold,
        })
    }

    componentWillUnmount() {
        this.observer = null
    }

    handleObservedEntries = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opaque')
            } else {
                entry.target.classList.remove('opaque')
            }
        })
    }

    observeElement = (ref) => {
        if (this.observer) this.observer.observe(ref)
    }

    render() {
        const { observeElement } = this

        return (
            <Section id="projects" additionalStyles={additionalSectionStyles}>
                <Heading>{content.heading}</Heading>
                <ProjectList observeElement={observeElement} />
            </Section>
        )
    }
}

// =============================================================================

const colors = theme.colors
const heights = theme.dimensions.heights

const fontSizes = {
    heading: {
        xs: '28px',
        sm: '32px',
        md: '42px',
        lg: '50px',
        xl: '54px',
    },
}

// =============================================================================

const additionalSectionStyles = css`
    margin: 100px 0;

    /* The top offset is calculated by adding the navigation bar's height and
       the additional space. */
    padding-top: calc(${heights.navbar.md} + 48px);

    @media only screen and (min-width: 768px) {
        margin-top: 300px;
    }

    @media only screen and (min-width: 1024px) {
        margin-top: 300px;
    }

    @media only screen and (min-width: 1440px) {
        margin-top: 300px;
    }
`

// =============================================================================

const Heading = styled('h2')`
    position: relative;
    font-weight: 500;
    font-size: ${fontSizes.heading.xs};

    &::after {
        position: absolute;
        bottom: -18px;
        left: 0;
        width: 30%;
        height: 4px;
        background: rgba(${colors.blue}, 0.6);
        content: '';
    }

    @media only screen and (min-width: 568px) {
        font-size: ${fontSizes.heading.sm};
    }

    @media only screen and (min-width: 768px) {
        font-size: ${fontSizes.heading.md};
    }

    @media only screen and (min-width: 1024px) {
        font-size: ${fontSizes.heading.lg};

        &::after {
            height: 5px;
        }
    }

    @media only screen and (min-width: 1440px) {
        display: flex;
        justify-content: center;
        font-size: ${fontSizes.heading.xl};

        &::after {
            left: unset;
            height: 6px;
        }
    }
`

// =============================================================================

export default Projects
