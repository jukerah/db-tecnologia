import styled from 'styled-components';
import { theme } from '../../../styles/Theme';

interface ButtonProps {
    backgroundColor: string;
    color: string;
}

export const Button = styled.button<ButtonProps>`
    background-color: ${(props) => props.backgroundColor};
    border: none;
    
    width: 100%;
    height: 48px;   

    a {
        color: ${(props) => props.color};
        font-size: ${theme.fontSizes.md};
        font-weight: bold;
    }

    &:hover {
        filter: brightness(1.2);
        cursor: pointer;
    }

    &[disabled] { cursor: not-allowed; }

    svg { animation: rotation 2s infinite; }

    @keyframes rotation {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }

    @media (min-width: 1024px) {
        height: 56px;

        a { font-size: ${theme.fontSizes.lg}; }
    }
`;
