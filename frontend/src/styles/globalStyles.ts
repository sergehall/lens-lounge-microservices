import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', 'Arial', sans-serif;
    }
`;

export default GlobalStyles;
