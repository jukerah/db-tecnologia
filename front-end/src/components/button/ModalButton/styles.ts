import styled from 'styled-components';
import { theme } from '../../../styles/Theme';

export const Button = styled.button`
    background-color: ${theme.colors.luckPoint};
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: 56px;

    padding: 0 32px;
    gap: 26px;

    cursor: pointer;

    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.md};
    font-weight: ${theme.fontWeight.semiBold};

    &:hover {
        filter: brightness(1.2);
        cursor: pointer;
    }

    @media (min-width: 1024px) {
        height: 96px;
        
        font-size: ${theme.fontSizes.tmd};

        svg { 
            width: 64px;
            height: 64px;
        }
    }
`;
