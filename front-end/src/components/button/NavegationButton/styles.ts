import styled from 'styled-components';

export const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.luckPoint};
    border: none;
    
    width: 100%;
    height: 48px;

    padding: 0 32px;
    cursor: pointer;

    a {
        color: ${({ theme }) => theme.colors.white};
        font-size: ${({ theme }) => theme.fontSizes.md};
        font-weight: ${({ theme }) => theme.fontWeight.semiBold};
        white-space: nowrap;

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
        height: 56px;

        a {
            font-size: ${({ theme }) => theme.fontSizes.lg};

            svg { 
                width: 32px;
                height: 32px;
             }
        }
    }
`;
