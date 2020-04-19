import React from 'react'

import styled, { css } from 'styled-components'
import { theme, Section } from '@theme'

// =============================================================================

const Footer = () => {
    return (
        <Root>
            <Section id="contact" additionalStyles={additionalSectionStyles}>
                <h2>Contact me</h2>
                <Label htmlFor="fullName">Name</Label>
                <Input type="text" name="fullName" placeholder="John Doe" />

                <Label htmlFor="email">Email</Label>
                <Input
                    type="email"
                    name="email"
                    placeholder="e.g. example@yourcompany.com"
                />

                <Label htmlFor="subject">Subject</Label>
                <Input
                    type="text"
                    name="subject"
                    placeholder="e.g. Let's connect, Kevin!"
                />

                <Label htmlFor="message">Message</Label>
                <TextArea name="message" placeholder="Your message" />

                <Button type="submit" color="blue">
                    Send Message
                </Button>
            </Section>
        </Root>
    )
}

// =============================================================================

const { colors, transitions } = theme

// =============================================================================

const Root = styled('footer')`
    position: relative;
    z-index: 0;
    width: 100%;
    margin-top: 200px;
    padding: 24px 24px 60px;
    background: rgba(${colors.footer}, 0.7);
`

// =============================================================================

const additionalSectionStyles = css`
    min-height: unset;

    @media only screen and (min-width: 1024px) {
        width: 50%;
    }
`

// =============================================================================

const Label = styled('label')`
    margin-bottom: 8px;
    color: rgba(${colors.heading}, 1);
    font-size: 20px;

    & ~ & {
        margin-top: 24px;
    }
`

// =============================================================================

const commonInputStyles = css`
    padding: 12px 8px;
    font-size: 20px;
    background: rgba(${colors.heading}, 0.85);
    border: 0;
`

// =============================================================================

const Input = styled('input')`
    ${commonInputStyles}
`

// =============================================================================

const TextArea = styled('textarea')`
    ${commonInputStyles}
    height: 200px;
`

// =============================================================================

const width = {
    xs: '100%',
    sm: '100%',
    md: '260px',
    lg: '280px',
    xl: '',
}
const height = {
    xs: '60px',
    sm: '60px',
    md: '68px',
    lg: '70px',
    xl: '',
}
const fontSize = {
    xs: '17px',
    sm: '17px',
    md: '18px',
    lg: '19px',
    xl: '',
}

const Button = styled('button')`
    position: relative;

    /* Box model styles */
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${width.xs};
    height: ${height.xs};

    /* Typography styles */
    color: rgba(${colors.heading}, 1);
    font-size: ${fontSize.xs};
    letter-spacing: 0.1rem;
    text-align: center;
    text-transform: uppercase;

    /* Visual styles */
    background: transparent;
    border: 2px solid rgba(${colors.blue}, 1);

    /* Misc. styles */
    cursor: pointer;
    transition: color ${transitions.buttons}, border ${transitions.buttons};

    &::before {
        position: absolute;
        z-index: -1;
        width: calc(100% - 4px);
        height: calc(100% - 4px);
        background: rgba(${colors.blue}, 1);
        transition: background ${transitions.buttons};
        content: '';
    }

    &:hover,
    &:active {
        color: rgba(${colors.heading}, 0.6);
        border-color: rgba(${colors.blue}, 0.6);

        &::before {
            background-color: rgba(${colors.blue}, 0.6);
        }
    }

    @media only screen and (min-width: 768px) {
        width: ${width.md};
        height: ${height.md};
        font-size: ${fontSize.md};
    }

    @media only screen and (min-width: 1024px) {
        width: ${width.lg};
        height: ${height.lg};
        margin-top: 36px;
        font-size: ${fontSize.lg};
    }
`

// =============================================================================

export default Footer
