// React modules
import React from 'react'
import PropTypes from 'prop-types'

// Styling modules
import styled from 'styled-components'
import { theme } from '@theme'

// Misc. modules
import { generateKey } from '@utils'

// =============================================================================

const ProjectCard = (props) => {
    const { name, description, tags, url, imgSrc } = props

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

// =============================================================================

const Card = styled('li')`
    width: 100%;
    list-style: none;

    & + & {
        margin-top: 80px;
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
        bottom: -8px;
        left: 0;

        /* Box model styles */
        width: 90px;
        height: 1px;
        background: rgba(${colors.heading}, 1);

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

export default ProjectCard
