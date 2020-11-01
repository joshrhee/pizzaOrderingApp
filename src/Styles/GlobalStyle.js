import { createGlobalStyle } from 'styled-components'; // yarn add styled-components

//Global style component

//https://styled-components.com/docs/api#helpers
// Google font for body: font-family: 'Open Sans', sans-serif;
// Google font for headers: font-family: 'Righteous', cursive;
//Global style component, style component need ``
//margin: 0; makes no margin or space from the edge of the page

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: 'Open Sans', sans-serif;
    }

    h1, h2, h3 {
        font-family: 'Righteous', cursive;
    }
`;