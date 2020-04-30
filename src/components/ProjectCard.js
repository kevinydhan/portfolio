import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme, CSSMixins as CMx, IconContainer } from '@theme'
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

const ProjectContainer = styled('div')`
    width: 100%;
    max-width: ${theme.maxWidthMain};
    min-height: 100vh;
    padding: 3em 0;

    @media only screen and (max-width: 768px) and (orientation: landscape) {
        height: auto;
        padding: 5em 0;
    }

    &:nth-child(3n + 1) {
        picture {
            background: rgba(${theme.colorLightBlue}, 0.85);
        }

        ul {
            color: rgba(${theme.colorLightBlue}, 1);
        }
    }

    &:nth-child(3n + 2) {
        picture {
            background: rgba(${theme.colorYellow}, 0.85);
        }

        ul {
            color: rgba(${theme.colorYellow}, 1);
        }
    }

    &:nth-child(3n + 3) {
        picture {
            background: rgba(${theme.colorRed}, 0.85);
        }

        ul {
            color: rgba(${theme.colorRed}, 1);
        }
    }

    @media only screen and (min-width: 768px) {
        ${CMx.fullPage()}
        flex-direction: row;
        justify-content: space-between;
        padding: 0 36px;
    }

    @media only screen and (min-width: 1024px) {
        justify-content: center;
        margin: 0 auto;
    }
`

// =============================================================================

const Picture = styled('picture')`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 36px 16px;
    box-shadow: ${theme.boxShadowMain};

    img {
        width: 100%;
    }

    @media only screen and (min-width: 768px) {
        width: 47.5%;
        height: 50vw;
        min-height: 350px;
        max-height: 425px;
        padding: 0 16px;
    }

    @media only screen and (min-width: 1024px) {
        width: 500px;
        height: 50vw;
        min-height: 350px;
        max-height: 500px;
        padding: 0 24px;
    }

    @media only screen and (min-width: 1366px) {
        width: 500px;
        height: 500px;
    }

    @media only screen and (min-width: 1600px) {
        width: 500px;
        height: 500px;
    }
`

// =============================================================================

const ProjectBody = styled('div')`
    @media only screen and (min-width: 768px) {
        width: 47.5%;
        margin: 0;
    }

    @media only screen and (min-width: 1024px) {
        width: 500px;
        margin: 0 0 0 96px;
    }

    @media only screen and (min-width: 1366px) {
        width: 500px;
        margin: 0 0 0 96px;
    }
`

// =============================================================================

const Title = styled('h3')`
    margin: 1em 0 0;

    @media only screen and (min-width: 1024px) {
        margin: 0;
    }
`

// =============================================================================

const Description = styled('p')`
    margin: 0.5em 0 0;

    @media only screen and (min-width: 1366px) {
        margin: 1em 0 0;
    }
`

// =============================================================================

const TechnologyList = styled('ul')`
    display: flex;
    flex-wrap: wrap;

    margin: 4em 0 0;
    list-style: none;

    @media only screen and (min-width: 1366px) {
        margin: 7em 0 0;
    }
`

// =============================================================================

const TechnologyTag = styled('li')`
    margin: 8px 20px 0 0;
    font-size: 12px;

    @media only screen and (min-width: 1024px) {
        margin: 10px 20px 0 0;
        font-size: 14px;
    }
`

// =============================================================================

// const IconContainer = styled('div')`
//     margin: 1.75em 0 0;

//     a + a {
//         margin-left: 24px;
//     }

//     @media only screen and (min-width: 1366px) {
//         margin: 2em 0 0;
//     }
// `

// =============================================================================

export default ProjectCard
