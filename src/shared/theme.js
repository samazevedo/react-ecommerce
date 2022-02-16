import { type } from '@testing-library/user-event/dist/type'
import { ThemeProps } from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const theme = {
    colors: {
        green: '#CFFA41',
        blue: '#60C2FB',
        orange: '#FF8E25',
        white: '#FFFFFF',
        black: '#000000',
        gray: '#696969',
    },
    fonts: {},
    fontSizes: {
        small: '1.2rem',
        medium: '1.6rem',
        large: '2.4rem',
    },
    breakPoints: {
        mobile: '576px',
        tablet: '768px',
        desktop: '1024px',
        desktopL: '1280px',
    },
}

export type MainThemeProps = ThemeProps<typeof theme>
export const GlobalStyle =
    createGlobalStyle <
    MainThemePorps >
    `
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
