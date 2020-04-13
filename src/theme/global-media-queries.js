import { css } from 'styled-components'

export const appMediaQueries = {
    betweenXSAndMD: (props) => {
        const { md } = props.theme.dimensions.breakpoints
        return css`
            @media only screen and (max-width: ${md}px) {
                padding: 0 48px;
            }
        `
    },
}
