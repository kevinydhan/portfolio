import { createGlobalStyle } from 'styled-components'

/**
 * List of possible fonts:
 * - Bai Jamjuree
 * - Inter
 * - Karla
 */
const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
}

html {
    box-sizing: border-box;

    font-family: 'Karla', sans-serif;
    scroll-behavior: smooth;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    color: ${(props) => props.theme.colors.black};
}

p,
a {
    color: ${(props) => props.theme.colors.darkgrey};
}

a {
    text-decoration: none;
}

#app {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100vw;
    height: 300vh;
}
`

export default GlobalStyle
