import React from 'react'
import styled from 'styled-components'
import { theme, ButtonLink } from '@theme'
import { generateKey } from '@utils'
import content from '@content/landing.yml'

const Landing = () => {
    return (
        <Section>
            <Heading>{content.heading}</Heading>
            <Paragraph>{content.description}</Paragraph>
            <CTAContainer>
                {content.cta.map((cta, i) => (
                    <ButtonLink key={generateKey(cta.text, i)} {...cta} />
                ))}
            </CTAContainer>
        </Section>
    )
}

const { breakpoints } = theme.dimensions

const Section = styled('section')`
    display: flex;
    flex-direction: column;
    max-width: 1024px;
    min-height: 100vh;
    padding: 0.75em 1.25em 3em;
    width: 100vw;

    @media only screen and (min-width: ${breakpoints['iPhone5/SE']}) {
        justify-content: center;
        padding: 0 1.25em;
    }
`

const Heading = styled('h1')`
    text-shadow: 2px 2px 5px rgba(${theme.colors.primary}, 1);
`

const Paragraph = styled('p')`
    margin-top: 30px;
`

const CTAContainer = styled('div')`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 130px;
    justify-content: space-between;
    margin-top: 70px;
`

export default Landing
