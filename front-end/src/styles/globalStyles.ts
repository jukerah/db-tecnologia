import { createGlobalStyle } from 'styled-components';
import { theme } from './Theme';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    html {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

        &::-webkit-scrollbar {
            width: 8px;
            background-color: ${theme.colors.bayOfMany};
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${theme.colors.midnight};
        }
    }
`;
 
export default GlobalStyle;