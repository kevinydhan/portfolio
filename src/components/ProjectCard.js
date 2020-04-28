import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
    theme,
    CSSMixins as CMx,
    IconLink,
    ExternalLinkIcon,
    GithubCircleIcon,
    GitLabIcon,
    FigmaIcon,
} from '@theme'

const ProjectCard = (props) => {
    const {
        title,
        description,
        className,
        imgSrc,
        imgAlt,
        technologies,
        links,
        observeElement,
    } = props

    console.log('ProjectCard rerendered')

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

                <IconContainer>
                    {links.map((link, i) => {
                        const { type, ...linkProps } = link
                        let child
                        switch (type) {
                            case 'external':
                                child = <ExternalLinkIcon />
                                break
                            case 'github':
                                child = <GithubCircleIcon />
                                break
                            case 'gitlab':
                                child = <GitLabIcon />
                                break
                            case 'figma':
                                child = <FigmaIcon />
                                break
                        }
                        return (
                            <IconLink key={`${type}-${i}`} {...linkProps}>
                                {child}
                            </IconLink>
                        )
                    })}
                </IconContainer>
            </ProjectBody>
        </ProjectContainer>
    )
}

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    originalImgName: PropTypes.string.isRequired,
    className: PropTypes.string,
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    links: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
            target: PropTypes.string,
            rel: PropTypes.string,
        })
    ).isRequired,
    observeElement: PropTypes.func.isRequired,
}

// =============================================================================

const ProjectContainer = styled('div')`
    ${CMx.fullPage()}
    display: flex;
    flex-direction: row;

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
`

// =============================================================================

const Picture = styled('picture')`
    display: flex;
    align-items: center;
    justify-content: center;

    > img {
        width: 90%;
    }

    @media only screen and (min-width: 1024px) {
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
    @media only screen and (min-width: 1366px) {
        width: 500px;
        margin: 0 0 0 96px;
    }
`

// =============================================================================

const Title = styled('h3')`
    /* Filler */
`

// =============================================================================

const Description = styled('p')`
    @media only screen and (min-width: 1366px) {
        margin: 1em 0 0;
    }
`

// =============================================================================

const TechnologyList = styled('ul')`
    display: flex;
    flex-wrap: wrap;
    list-style: none;

    @media only screen and (min-width: 1366px) {
        margin: 7em 0 0;
    }
`

// =============================================================================

const TechnologyTag = styled('li')`
    margin: 12px 24px 0 0;

    @media only screen and (min-width: 1024px) {
        margin: 10px 20px 0 0;
        font-size: 14px;
    }
`

// =============================================================================

const IconContainer = styled('div')`
    @media only screen and (min-width: 1366px) {
        margin: 2em 0 0;

        a + a {
            margin-left: 24px;
        }
    }
`

// =============================================================================

export default ProjectCard
