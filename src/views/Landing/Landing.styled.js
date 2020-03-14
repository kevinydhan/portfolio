import styled, { css } from 'styled-components'
import theme from '../../theme'

const { mediaQueries } = theme

export const Root = styled('section')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100vw;
    min-height: 100vh;

    ${mediaQueries.up(
        { min: 'md' },
        `
        background: blue;
        `
    )}
`

export const EmphasizedWord = styled('em')``
