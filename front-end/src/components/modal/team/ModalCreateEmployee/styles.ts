import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100%;
    max-width: 500px;

    gap: 8px;

    @media (min-width: 1024px) {
        max-width: 700px;
        gap: 16px;
    }
`;

export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    gap: 16px;

    label {
        color: ${({ theme }) => theme.colors.white};
        font-size: ${({ theme }) => theme.fontSizes.sm};
        font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    }

    .container-input {
        display: flex;
        gap: 16px;
        flex-direction: column;
    }

    .container-left, .input {
        display: flex;
        flex-direction: column;
    }

    .container-left {
        width: 100%;
        gap: 16px;
    }

    .input { gap: 8px; }

    .photo {
        align-items: center;
    }

    .container-button {
        display: flex;
        gap: 16px;
    }

    @media (min-width: 1024px) {
        .container-input {
            justify-content: space-between;
            flex-direction: row;
        }

        .container-left { gap: 24px; }

        .photo { align-items: start; }
    }

    @media (min-width: 1024px) {
        &, .container-button { gap: 24px; }

        label {
            font-size: ${({ theme }) => theme.fontSizes.md};
        }
    }
`;