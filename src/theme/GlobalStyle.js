import { createGlobalStyle } from 'styled-components'

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

    font-family: 'Bai Jamjuree', sans-serif;
    scroll-behavior: smooth;
}

a {
    color: #fff;
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
