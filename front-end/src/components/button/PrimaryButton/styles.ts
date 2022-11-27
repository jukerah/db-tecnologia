import styled from 'styled-components';

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
        font-size: ${({ theme }) => theme.fontSizes.md};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
    }

    &:hover {
        filter: brightness(1.2);
        cursor: pointer;
    }

    svg { animation: rotation 2s infinite; }

    @media (min-width: 1024px) {
        height: 56px;

        a { font-size: ${({ theme }) => theme.fontSizes.lg}; }
    }
`;
