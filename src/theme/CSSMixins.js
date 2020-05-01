import { css } from 'styled-components'

class CSSMixins {
    static fullPage = () => css`
        width: 100%;
        height: 100vh;
    `

    /**
     *
     * @example
     * import { css } from 'styled-components'
     * const breakpointKeys = ['xs', 'sm', 'md', 'lg', 'xl']
     *
     * mediaQuery({
     *     width: { min: 'sm' | , max: 'xl' },
     *     height: { min: 'xs', max: 'lg' },
     *     orientation: 'portrait' | 'landscape',
     *     style: css`
     *         background: #fff;
     *     `
     * })
     */
    // static mediaQuery = (options) => {}
}

export default CSSMixins
