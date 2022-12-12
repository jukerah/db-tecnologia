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

    span, a {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;

        color: ${(props) => props.color};
        font-size: ${({ theme }) => theme.fontSizes.md};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
    }

    &:hover {
        filter: brightness(1.2);
        cursor: pointer;
    }
    
    .loading { animation: rotation 2s infinite; }

    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @media (min-width: 1024px) {
        height: 56px;

        span,  a { font-size: ${({ theme }) => theme.fontSizes.lg}; }
    }
`;
