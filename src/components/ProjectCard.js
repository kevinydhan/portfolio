import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme, IconContainer } from '@theme'
import { PropTypeProject } from '@utils'

// =============================================================================

const ProjectCard = ({
    title,
    description,
    className,
    imgSrc,
    imgAlt,
    technologies,
    links,
    observeElement,
}) => {
    const ref = useRef()

    useEffect(() => {
        if (ref.current) observeElement(ref.current)
    }, [observeElement])

    return (
        <ProjectContainer ref={ref} className={className}>
            <Picture>
                <img src={imgSrc} alt={imgAlt} />
            </Picture>

            <ProjectBody>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <TechnologyList>
                    {technologies.map((technology) => (
                        <TechnologyTag key={technology}>
                            {technology}
                        </TechnologyTag>
                    ))}
                </TechnologyList>
                <IconContainer links={links} />
            </ProjectBody>
        </ProjectContainer>
    )
}

ProjectCard.propTypes = {
    ...PropTypeProject,
    observeElement: PropTypes.func.isRequired,
}

// =============================================================================

const {
    colorLightBlue,
    colorRed,
    colorYellow,
    fontSizes,
    maxWidthMain,
    breakpointMd,
    breakpointLg,
    breakpointXl,
    boxShadowMain,
} = theme

// =============================================================================

const ProjectContainer = styled('div')`
    width: 100%;
    max-width: ${maxWidthMain};
    min-height: 100vh;
    padding: 3rem 0;

    &:nth-child(3n + 1) {
        picture {
            background: rgba(${colorLightBlue}, 0.75);
        }

        ul {
            color: rgba(${colorLightBlue}, 1);
        }
    }

    &:nth-child(3n + 2) {
        picture {
            background: rgba(${colorYellow}, 0.75);
        }

        ul {
            color: rgba(${colorYellow}, 1);
        }
    }

    &:nth-child(3n + 3) {
        picture {
            background: rgba(${colorRed}, 0.75);
        }

        ul {
            color: rgba(${colorRed}, 1);
        }
    }

    @media only screen and (max-width: ${breakpointMd}) and (orientation: landscape) {
        height: auto;
        padding: 5rem 0;
    }

    @media only screen and (min-width: ${breakpointMd}) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    @media only screen and (min-width: ${breakpointLg}) {
        justify-content: center;
        margin: 0 auto;
    }
`

// =============================================================================

const Picture = styled('picture')`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2.25rem 1rem;
    box-shadow: ${boxShadowMain};

    img {
        width: 100%;
    }

    @media only screen and (min-width: ${breakpointMd}) {
        width: 47.5%;
        height: 50vw;
        min-height: 21.875rem;
        max-height: 26.25rem;
        padding: 0 1rem;
    }

    @media only screen and (min-width: ${breakpointLg}) {
        width: 31.25rem;
        min-height: 21.875rem;
        max-height: 31.25rem;
        padding: 0 1.5rem;
    }
`

// =============================================================================

const ProjectBody = styled('div')`
    @media only screen and (min-width: ${breakpointMd}) {
        width: 47.5%;
        margin: 0;
    }

    @media only screen and (min-width: ${breakpointLg}) {
        width: 31.25rem;
        margin: 0 0 0 6rem;
    }
`

// =============================================================================

const Title = styled('h3')`
    margin: 1rem 0 0;

    @media only screen and (min-width: ${breakpointMd}) {
        margin: 0;
    }
`

// =============================================================================

const Description = styled('p')`
    margin: 0.5rem 0 0;

    @media only screen and (min-width: ${breakpointXl}) {
        margin: 1rem 0 0;
    }
`

// =============================================================================

const TechnologyList = styled('ul')`
    display: flex;
    flex-wrap: wrap;

    margin: 4rem 0 0;
    list-style: none;

    @media only screen and (min-width: ${breakpointXl}) {
        margin: 7rem 0 0;
    }
`

// =============================================================================

const TechnologyTag = styled('li')`
    margin: 0.5rem 1.25rem 0 0;
    font-size: ${fontSizes['-1.5']};

    @media only screen and (min-width: ${breakpointLg}) {
        margin: 0.625rem 1.25rem 0 0;
        font-size: ${fontSizes['-0.5']};
    }
`

// =============================================================================

export default ProjectCard
