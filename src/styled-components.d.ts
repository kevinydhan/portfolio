import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        /**
         * RGB values separated by commas.
         *
         * @example - primary: "0, 0, 255"
         */
        colors: {
            primary: string
            secondary: string
            accent: string
            dark: string
            light: string
        }
        dimensions: {
            /**
             * Widths, represented in number of pixels.
             *
             * @example - mobile: 400
             */
            breakpoints: {
                mobile: number
                tablet: number
                desktop: number
            }
        }
    }
}
