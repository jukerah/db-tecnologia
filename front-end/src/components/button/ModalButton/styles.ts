import styled from 'styled-components';

export const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.luckPoint};
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: 56px;

    padding: 0 32px;
    gap: 26px;

    cursor: pointer;

    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};

    &:hover {
        filter: brightness(1.2);
        cursor: pointer;
    }

    @media (min-width: 1024px) {
        height: 96px;
        font-size: ${({ theme }) => theme.fontSizes.tmd};

        svg { 
            width: 48px;
            height: 48px;
        }
    }
`;
