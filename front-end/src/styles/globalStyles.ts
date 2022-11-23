import { createGlobalStyle } from 'styled-components';
import { theme } from './Theme';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    html {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

        &::-webkit-scrollbar {
            width: 8px;
            background-color: ${theme.colors.white};
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${theme.colors.midnight};
        }
    }
`;
 
export default GlobalStyle;