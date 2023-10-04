/*
- Spacing system (px)
2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128


*/

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    &, &.light-mode {
      /* yellow */
      --color--yellow-100: rgb(254, 249, 195);
      --color--yellow-200: rgb(254,240,138); 
      --color--yellow-300: rgb(253,224,71);
      --color--yellow-400: rgb(250,204,21);
      --color--yellow-500: rgb(234, 179, 8);

      /* purple */
      --color--purple-50: #faf5ff;
      --color--purple-100: #f3e8ff;
      --color--purple-200: #e9d5ff;
      --color--purple-300: #d8b4fe;
      --color--purple-400: #c084fc;
      --color--purple-500: #a855f7;
      --color--purple-600: #9333ea;
      --color--purple-700: #7e22ce;
      --color--purple-800: #6b21a8;
      --color--purple-900: #581c87;

      /* slate */
      --color--slate-50: #f8fafc;
      --color--slate-100: #f1f5f9;
      --color--slate-200: #e2e8f0;
      --color--slate-300: #cbd5e1;
      --color--slate-400: #94a3b8;
      --color--slate-500: #64748b;
      --color--slate-600: #475569;
      --color--slate-700: #334155;
      --color--slate-800: #1e293b;
      --color--slate-900: #0f172a;
      --color--slate-950: #020617;
      
      /* white */
      --color--white: rgb(255,255,255);
      --color--white-50 : rgba(255, 255, 255, 0.97);

      /* grey */
      --color--grey-50: #f9fafb;
    }

    &.dark-mode {

    }
}

*,
*::before,
*::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;   
}

html {
    font-size: 62.5%;
    overflow-x: hidden;

    @media (max-width: 84em) {
      font-size: 56.25%;
    }

    @media (max-width: 59em) {
      font-size: 50%
    }

    @media (max-width: 34em) {
      font-size: 43.75%
    }
}

body {
  font-family: 'Montserrat', sans-serif;
    line-height: 1;
    background-color: var(--color--white);
    color: var(--color--slate-700);
    /* background-color: var(--color--purple-400);
    color: var(--color--slate-50); */
    
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

`;

export default GlobalStyles;
