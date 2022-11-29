import styled from 'styled-components';

interface ButtonProps {
    backgroundColor: string;
    color: string;
}

export const Button = styled.button<ButtonProps>`
    background-color: ${(props) => props.backgroundColor};
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: 48px;

    padding: 0 32px;
    gap: 26px;

    cursor: pointer;

    color: ${(props) => props.color};
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    white-space: nowrap;

    &:hover {
        filter: brightness(1.2);
        cursor: pointer;
    }

    @media (min-width: 1024px) {
        height: 56px;
        font-size: ${({ theme }) => theme.fontSizes.lg};

        svg { 
            width: 32px;
            height: 32px;
        }
    }
`;
