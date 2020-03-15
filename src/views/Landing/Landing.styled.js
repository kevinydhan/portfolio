import styled, { css } from 'styled-components'

export const Root = styled('section')`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100vw;
    max-width: 1024px;
    min-height: 110vh;

    background: ${(props) => props.theme.colors.white};
`

export const TextContainer = styled('div')`
    ${(props) => {
        const { xs, sm } = props.theme.dimensions.breakpoints
        return css`
            @media only screen and (max-width: ${sm}px) and (min-width: ${xs}px) {
            }
        `
    }}

    ${(props) => {
        const { sm } = props.theme.dimensions.breakpoints
        return css`
            @media only screen and (min-width: ${sm}px) {
                position: relative;
                margin-bottom: 4em;
                width: 70vw;
                max-width: calc(1024px * 0.6);

                &::before {
                    content: '';
                    position: absolute;
                    top: 8px;
                    left: -48px;

                    width: 5px;
                    height: 100%;

                    background: ${(props) => props.theme.colors.primary};
                }
            }
        `
    }}
`

export const VerticalLine = styled('div')`
    width: 5px;
    height: 100%;

    background: ${(props) => props.theme.colors.primary};
`

export const TextShadowWord = styled('h1')`
    margin-left: -6px;

    font-size: 76px;
    font-weight: 400;
    letter-spacing: 3px;
`

export const IntroductionParagraph = styled('p')`
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 1px;

    &:first-of-type {
        margin-top: 30px;
    }

    & ~ & {
        margin-top: 14px;
    }
`

export const EmphasizedWord = styled('em')`
    color: ${(props) => props.theme.colors.primary};
    font: bold 25px 'Karla';
`
