import { css } from 'styled-components'
import theme from './theme'

class CSSMixins {
    static flexbox = (
        options = {
            justifyContent: 'center',
            alignItems: 'center',
        }
    ) => {
        const { justifyContent, alignItems } = { ...options }

        return css`
            display: flex;
            align-items: ${alignItems};
            justify-content: ${justifyContent};
        `
    }

    static fullPage = () => {
        return css`
            ${this.flexbox()}
            flex-direction: column;
            width: 100%;
            max-width: ${theme.maxWidthMain};
            height: 100vh;
            padding: 0 16px;

            @media only screen and (min-width: 768px) {
                min-height: 768px;
            }

            @media only screen and (min-width: 1024px) {
                min-height: 576px;
            }

            @media only screen and (min-width: 1366px) {
                min-height: 768px;
                margin: 0 auto;
            }
        `
    }
}

export default CSSMixins
