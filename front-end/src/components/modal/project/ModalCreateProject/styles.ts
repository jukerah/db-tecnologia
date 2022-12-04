import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100%;
    max-width: 500px;

    gap: 8px;

    @media (min-width: 1024px) {
        width: 700px;
        max-width: 700px;
        gap: 16px;
    }
`;

export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    gap: 16px;

    label, p {
        font-size: ${({ theme }) => theme.fontSizes.sm};
        font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    }

    label { color: ${({ theme }) => theme.colors.white}; }
    p {
        color: ${({ theme }) => theme.colors.gold};
        text-align: center;
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