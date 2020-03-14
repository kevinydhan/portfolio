/**
 * Is a `styled-components` function theme.
 *
 * @param {ThemeStyledProps<RootProps, DefaultTheme>} props - Props
 *
 * @returns {string} - CSS style block
 */
export const isRootTransparent = (props) => {
    const { isTransparent } = props
    return isTransparent
        ? `
        background-color: transparent;`
        : `
        background-color: rgba(5, 5, 5, 0.5);
        box-shadow: 0px 10px 30px rgba(57, 56, 61, 0.205);`
}
