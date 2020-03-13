import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: "Bai Jamjuree", sans-serif;
}

body {
    background: rgba(${({ theme }) => theme.colors.light}, 0.95);
}

a {
    text-decoration: none;
    color: black;
}

#app {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(black, orange);

    width: 100vw;
    height: 300vh;
}
`
export default GlobalStyle
