import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from '@theme'
import { generateKey } from '@utils'

/**
 * Renders a project card.
 */
const ProjectCard = (props) => {
    const { name, description, url, tags } = props

    return (
        <Container>
            <div>
                <Heading>{name}</Heading>
                <Description>{description}</Description>
            </div>
            <TagList>
                {tags.map((tag, i) => (
                    <Tag key={generateKey(tag, i)}>{tag}</Tag>
                ))}
            </TagList>
        </Container>
    )
}

const { colors } = theme

/**
 * Renders a `<div>` tag. This element is the top-level element for the project
 * card.
 */
const Container = styled('div')`
    border: 3px solid rgba(${colors.text}, 0.15);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 450px;
    padding: 1.25em;
    width: 100%;

    &:not(:first-child) {
        margin-top: 40px;
    }

    &:first-of-type {
        margin-top: 60px;
    }
`

/**
 * Renders a `<h3>` tag. This element contains the project's name.
 */
const Heading = styled('h3')`
    font-size: 1.5rem;
    letter-spacing: 2px;
    margin: 0 -2px 0 0;
`

/**
 * Renders a `<p>` tag. This element contains the project's description.
 */
const Description = styled('p')`
    margin: 1em 0 0;
`

/**
 * Renders a `<ul>` tag. This element contains the list of technology tags used
 * in the project.
 */
const TagList = styled('ul')`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin-left: -17px;
`

/**
 * Renders a `<li>` tag. This element renders a single technology tag.
 */
const Tag = styled('li')`
    background: rgba(${colors.primary}, 0.95);
    border-radius: 8px;
    color: rgba(${colors.heading}, 0.9);
    font-size: 0.875rem;
    letter-spacing: 1px;
    margin: 0.5em 0 0 16px;
    padding: 0.5em 0.5em 0.5em calc(0.5em - 1px);
`

ProjectCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    url: PropTypes.shape({
        external: PropTypes.string,
        git: PropTypes.string,
    }).isRequired,
}

export default ProjectCard
