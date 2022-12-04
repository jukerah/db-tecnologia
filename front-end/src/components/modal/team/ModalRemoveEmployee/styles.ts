import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100%;

    gap: 8px;

    @media (min-width: 1024px) {
        gap: 16px;
    }
`;

export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    gap: 16px;

    color: ${({ theme }) => theme.colors.sunflower};

    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    text-align: center;

    label {
        color: ${({ theme }) => theme.colors.white};
        font-size: ${({ theme }) => theme.fontSizes.sm};
        font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    }

    .container-input {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .container-button {
        display: flex;
        gap: 16px;
    }

    @media (min-width: 1024px) {
        &, .container-button { gap: 24px; }

        label {
            font-size: ${({ theme }) => theme.fontSizes.md};
=        }
    }
`;