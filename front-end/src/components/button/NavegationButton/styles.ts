import styled from 'styled-components';
import { theme } from '../../../styles/Theme';

export const Button = styled.button`
    background-color: ${theme.colors.luckPoint};
    border: none;
    
    width: 100%;
    height: 56px;

    padding: 0 32px;
    cursor: pointer;

    a {
        color: ${theme.colors.white};
        font-size: ${theme.fontSizes.md};
        font-weight: ${theme.fontWeight.semiBold};

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 26px;
    }

    &:hover {
        filter: brightness(1.2);
        cursor: pointer;
    }

    @media (min-width: 1024px) {
        height: 96px;

        a {
            font-size: ${theme.fontSizes.tmd};

            svg { 
                width: 64px;
                height: 64px;
             }
        }
    }
`;
