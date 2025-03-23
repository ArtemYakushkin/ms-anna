import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Unbounded:wght@200..900&display=swap');

*,
::after,
::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
}

  body {
    font-family: "Montserrat", sans-serif;
    background-color: #ffffff;
    color: #5C5B5B;
  }

ul,
li {
    list-style: none;
    margin: 0;
    padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin: 0;
    padding: 0;
}

button {
    border: none;
    background: transparent;
    padding: 0;
    cursor: pointer;
    color: inherit;
    font-family: "Montserrat", sans-serif;
}

a {
    text-decoration: none;
    color: inherit;
}

input,
textarea {
    outline: none;
    border: none;
    font-family: inherit;
}

img {
    display: block;
    max-width: 100%;
}
`;

export default GlobalStyles;