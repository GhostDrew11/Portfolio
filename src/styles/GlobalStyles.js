/*
- Spacing system (px)
2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128


*/

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    &, &.light-mode {
      /* yellow */ 

      --color--yellow-200: rgb(254,240,138); 
      --color--yellow-400: rgb(250,204,21);
      
      /* purple */
     
      --color--purple-200: #e9d5ff;
      --color--purple-250: #e9d5ff;
      --color--purple-251: #e9d5ff;
      --color--purple-200-shadow: 	rgb(233, 213, 255, 0.1);
      --color--purple-450: #c084fc;
      --color--purple-400: #c084fc;
      --color--purple-700: #7e22ce;
      --color--purple-750: #7e22ce;

      /* slate */
      --color--slate-50: #f8fafc;
      --color--slate-100: #f1f5f9;
      --color--slate-600: #475569;
      --color--slate-700: #334155;
      --color--slate-750: #334155;
      --color--slate-800: #1e293b;
      --color--slate-900: #0f172a;
      
      /* white */
      --color--white: rgb(255,255,255);
      --color--white-25 : rgba(255, 255, 255);
      --color--white-50 : rgba(255, 255, 255, 0.97);

      /* grey */
      --color--grey-50: #f9fafb;

      --backdrop-color: rgba(255,255,255, 0.1)
    }

    &.dark-mode {
      --color--purple-200: rgb(254,240,138, 0.8);
      --color--purple-250: #0A0A0A;
      --color--purple-251: #16191d;
      --color--purple-400: #334155;
      --color--purple-450: #facc15;
      --color--purple-700:  rgb(250,204,21);

      /* slate */
      --color--slate-900: #fdfdfd;
      --color--slate-750: #e9e9e9;
      --color--slate-700: #b5b5b5;
      --color--slate-600: #A3A5A5;
      --color--slate-50: #0A0A0A;

      /* white */
      --color--white-50: rgba(0,0,0,.8);
      --color--white-25: #16191d;
    }

    --border-radius-xl: 1rem;
    --border-radius-lg: 0.9rem;
    --border-radius-md: 0.4rem;
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
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

`;

export default GlobalStyles;
