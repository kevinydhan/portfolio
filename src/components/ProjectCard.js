// React modules
import React, { useEffect, createRef } from 'react'
import PropTypes from 'prop-types'

// Styling modules
import styled from 'styled-components'
import { theme, IconLink } from '@theme'
import { ExternalLinkIcon, GithubCircleIcon, GitLabIcon } from '@theme/icons'

// Misc. modules
import { generateKey } from '@utils'

// =============================================================================

const ProjectCard = (props) => {
    const {
        name,
        description,
        tags,
        url,
        imgSrc,
        imgAlt,
        observeElement,
    } = props

    const ref = createRef()

    useEffect(() => {
        if (ref.current) observeElement(ref.current)
    }, [])

    const externalDomain = ['Netlify', 'Heroku'].filter((domain) => {
        return url.external.includes(domain.toLowerCase())
    })

    const ExternalLink = url.external ? (
        <IconLink href={url.external} aria-label={externalDomain[0]}>
            <ExternalLinkIcon />
        </IconLink>
    ) : null

    const Github = url.github ? (
        <IconLink href={url.github} aria-label="Github">
            <GithubCircleIcon />
        </IconLink>
    ) : null

    const GitLab = url.gitlab ? (
        <IconLink href={url.gitlab} aria-label="GitLab">
            <GitLabIcon />
        </IconLink>
    ) : null

    return (
        <Card ref={ref}>
            <ImageContainer>
                <Image src={imgSrc} alt={imgAlt} />
            </ImageContainer>
            <Content>
                <Title>{name}</Title>
                <Description>{description}</Description>
                <TagList>
                    {tags.map((tag, i) => (
                        <TagItem key={generateKey(tag, i)}>{tag}</TagItem>
                    ))}
                </TagList>
                <IconContainer>
                    {Github}
                    {GitLab}
                    {ExternalLink}
                </IconContainer>
            </Content>
        </Card>
    )
}

ProjectCard.defaultProps = { tags: [], url: {} }

ProjectCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    url: PropTypes.shape({
        external: PropTypes.string,
        gitlab: PropTypes.string,
        github: PropTypes.string,
    }),
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    observeElement: PropTypes.func.isRequired,
}

// =============================================================================

const { colors, transitions } = theme

/**
 * This variable references the width for the title's underline and icons'
 * top border.
 */
const underlineWidthMobile = '96px'

const underlineWidthDesktop = '100px'

/**
 * This variable references the distance between the underline and the title.
 * It is also used to calculate the distance between the top border of the icon
 * container and the container's top edge.
 */
const underlineDistanceMobile = '8px'

const underlineDistanceDesktop = '12px'

/**
 * This variable references the underline's thickness.
 */
const underlineThicknessMobile = '2px'

const underlineThicknessDesktop = '3px'

/**
 * This variable references the underline's background color.
 */
const underlineBackground = `rgba(${colors.heading}, 1)`

/**
 * This variable references the width for the project's title, description,
 * and tag list at viewport widths of `768px` and above.
 */
const bodyWidth = '85%'

/**
 * xs = 0px
 * sm = 375px
 * md = 768px
 * lg = 1024px
 * xl = 1440px
 */
const fontSizes = {
    title: {
        xs: '24px',
        sm: '24px',
        md: '30px',
        lg: '33px',
        xl: '36px',
    },
    description: {
        xs: '17px',
        sm: '17px',
        md: '18px',
        lg: '20px',
        xl: '20px',
    },
    tags: {
        xs: '14px',
        sm: '14px',
        md: '14px',
        lg: '15px',
        xl: '16px',
    },
}

const lineHeights = {
    description: {
        xs: '',
        sm: '',
        md: '32px',
        lg: '36px',
        xl: '36px',
    },
}

// =============================================================================

const ImageContainer = styled('picture')`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media only screen and (min-width: 768px) {
        flex: 1;
    }
`

// =============================================================================

const TagList = styled('ul')`
    display: flex;
    flex-wrap: wrap;
    margin-top: 80px;
    font-size: ${fontSizes.tags.xs};
    list-style: none;

    @media only screen and (min-width: 768px) {
        width: ${bodyWidth};
        font-size: ${fontSizes.tags.md};
    }

    @media only screen and (min-width: 1024px) {
        font-size: ${fontSizes.tags.lg};
    }

    @media only screen and (min-width: 1440px) {
        margin-top: 120px;
        font-size: ${fontSizes.tags.xl};
    }
`

// =============================================================================

const Card = styled('li')`
    width: 100%;
    list-style: none;

    & + & {
        margin-top: 90px;
    }

    &:nth-child(3n + 1) ${TagList} {
        color: rgba(${colors.lightblue}, 1);
    }

    &:nth-child(3n + 2) ${TagList} {
        color: rgba(${colors.yellow}, 1);
    }

    &:nth-child(3n + 3) ${TagList} {
        color: rgba(${colors.red}, 1);
    }

    &:nth-child(3n + 1) > ${ImageContainer} {
        background: rgba(${colors.lightblue}, 1);
    }

    &:nth-child(3n + 2) > ${ImageContainer} {
        background: rgba(${colors.yellow}, 1);
    }

    &:nth-child(3n + 3) > ${ImageContainer} {
        background: rgba(${colors.red}, 1);
    }

    @media only screen and (min-width: 768px) {
        display: flex;
        flex-direction: row-reverse;
        height: 550px;
        opacity: 0.1;
        transition: opacity ${transitions.projectCard};

        & + & {
            margin-top: 0;
        }

        &.opaque {
            opacity: 1;
        }
    }

    @media only screen and (min-width: 1024px) {
        height: 600px;
    }

    @media only screen and (min-width: 1440px) {
        height: 720px;
    }
`

// =============================================================================

const Image = styled('img')`
    width: 100%;
`

// =============================================================================

/**
 * This element parents the project's content, including the project title,
 * description, tags, and icons.
 */
const Content = styled('div')`
    @media only screen and (min-width: 768px) {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
    }
`

// =============================================================================

const Title = styled('h3')`
    position: relative;
    margin-top: 30px;
    font-weight: 400;
    font-size: ${fontSizes.title.xs};
    text-transform: uppercase;

    /* Creates the underline underneath the project title. */
    &::after {
        /* Positional styles */
        position: absolute;
        bottom: calc(${underlineDistanceMobile} * -1);
        left: 0;

        /* Box model styles */
        width: ${underlineWidthMobile};
        height: ${underlineThicknessMobile};
        background: ${underlineBackground};

        /* Misc. styles */
        content: '';
    }

    @media only screen and (min-width: 768px) {
        width: ${bodyWidth};
        font-size: ${fontSizes.title.md};
        letter-spacing: 0.2rem;
    }

    @media only screen and (min-width: 1024px) {
        font-size: ${fontSizes.title.lg};

        &::after {
            bottom: calc(${underlineDistanceDesktop} * -1);
            width: ${underlineWidthDesktop};
            height: ${underlineThicknessDesktop};
        }
    }

    @media only screen and (min-width: 1440px) {
        font-size: ${fontSizes.title.xl};
    }
`

// =============================================================================

const Description = styled('p')`
    margin-top: 32px;
    white-space: pre-wrap;

    @media only screen and (min-width: 768px) {
        width: ${bodyWidth};
        margin-top: 38px;
        font-size: ${fontSizes.description.md};
        line-height: ${lineHeights.description.md};
    }

    @media only screen and (min-width: 1024px) {
        font-size: ${fontSizes.description.lg};
        line-height: ${lineHeights.description.lg};
    }

    @media only screen and (min-width: 1440px) {
        font-size: ${fontSizes.description.xl};
        line-height: ${lineHeights.description.xl};
    }
`

// =============================================================================

const TagItem = styled('li')`
    margin: 6px 16px 0 0;
`

// =============================================================================

const IconContainer = styled('div')`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${underlineWidthMobile};
    margin-top: 40px;

    &::before {
        position: absolute;
        top: calc(${underlineDistanceMobile} * -1.9);
        left: 0;
        width: 100%;
        height: ${underlineThicknessMobile};
        background: ${underlineBackground};
        content: '';
    }

    @media only screen and (min-width: 768px) {
        margin-top: 44px;
    }

    @media only screen and (min-width: 1024px) {
        width: ${underlineWidthDesktop};
        margin-top: 52px;

        &::before {
            top: calc(${underlineDistanceDesktop} * -1.9);
            height: ${underlineThicknessDesktop};
        }

        > a svg {
            width: 42px;
            height: 42px;
        }
    }
`

// =============================================================================

export default ProjectCard
