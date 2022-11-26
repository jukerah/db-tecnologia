import styled from 'styled-components';
import { theme } from './Theme';

export const Index = styled.div`
    background: ${theme.background.linearBlue};
    
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 300vh;

    padding-top: 128px;

    h1 {
        background-image: linear-gradient(60deg, rgba(173, 191, 255, .7), rgba(164, 255, 211, .7), rgba(254, 233, 161, 0.7), rgba(173, 191, 255, .7), rgba(164, 255, 211, .7), rgba(256, 256, 256, .7), rgba(254, 233, 161, .7), rgba(173, 191, 255, .7), rgba(164, 255, 211, .7), rgba(254, 233, 161, 0.7), rgba(173, 191, 255, .7), rgba(164, 255, 211, .7), rgba(254, 233, 161, .7));
        background-size: 800% 800%;

        @keyframes rainbow { 
            0% { background-position:0% 50%; }
            50% { background-position:100% 25%; }
            100% { background-position:0% 50%; }
        }

        animation: rainbow 12s ease infinite;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        font-weight: 300;
        font-size: 100px;
        text-align: center;
    }
`;

export const SpecialModalBackground = styled.div`
    background-color: rgba(256, 256, 256, 0.1);
    backdrop-filter: blur(8px);

    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1;

    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
  `;