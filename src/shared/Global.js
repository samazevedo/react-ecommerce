import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html {
        scroll-behavior: smooth;
    };
    body {
        margin: 0;
        padding: 0;
        font-family: ${{ theme }} => theme.fonts.primary;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
    h1, h2, h3, h4, h5, h6 { 
        margin: 0; 
    }
    a {
        text-decoration:none;
    }
    a:hover { 
        color: ${({ theme }) => theme.colors.orange} 
    }
    ul {
        list-style: none;
    }
`
