// React modules
import React from 'react'
import PropTypes from 'prop-types'

// Styling modules
import styled from 'styled-components'
import { theme, IconLink } from '@theme'
import { ExternalLinkIcon, GithubCircleIcon, GitLabIcon } from '@theme/icons'

// Misc. modules
import { generateKey } from '@utils'

// =============================================================================

const ProjectCard = (props) => {
    const { name, description, tags, url, imgSrc } = props

    const ExternalLink = url.external ? (
        <IconLink>
            <ExternalLinkIcon />
        </IconLink>
    ) : null

    const Github = url.github ? (
        <IconLink>
            <GithubCircleIcon />
        </IconLink>
    ) : null

    const GitLab = url.gitlab ? (
        <IconLink>
            <GitLabIcon />
        </IconLink>
    ) : null

    return (
        <Card>
            <ImageContainer>
                <Image src={imgSrc} />
            </ImageContainer>
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
}

// =============================================================================

const colors = theme.colors

/**
 * This variable contains the dimension for the title's underline and icons'
 * top border width.
 */
const underlineWidthMobile = '96px'
const underlineDistanceMobile = '8px'
const underlineThicknessMobile = '2px'
const underlineBackground = `rgba(${colors.heading}, 1)`

// =============================================================================

const Card = styled('li')`
    width: 100%;
    list-style: none;

    & + & {
        margin-top: 90px;
    }

    &:nth-child(3n + 1) > ul {
        color: rgba(${colors.lightblue}, 1);
    }

    &:nth-child(3n + 2) > ul {
        color: rgba(${colors.yellow}, 1);
    }

    &:nth-child(3n + 3) > ul {
        color: rgba(${colors.red}, 1);
    }

    &:nth-child(3n + 1) > picture {
        background: rgba(${colors.lightblue}, 1);
    }

    &:nth-child(3n + 2) > picture {
        background: rgba(${colors.yellow}, 1);
    }

    &:nth-child(3n + 3) > picture {
        background: rgba(${colors.red}, 1);
    }
`

// =============================================================================

const ImageContainer = styled('picture')`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

// =============================================================================

const Image = styled('img')`
    width: 100%;
`

// =============================================================================

const Title = styled('h3')`
    position: relative;
    margin-top: 30px;
    font-weight: 400;
    font-size: 24px;
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
`

// =============================================================================

const Description = styled('p')`
    margin-top: 32px;
`

// =============================================================================

const TagList = styled('ul')`
    display: flex;
    flex-wrap: wrap;
    margin: 80px 0 0;
    list-style: none;
`

// =============================================================================

const TagItem = styled('li')`
    margin: 6px 16px 0 0;
    font-size: 14px;
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
`

// =============================================================================

export default ProjectCard
