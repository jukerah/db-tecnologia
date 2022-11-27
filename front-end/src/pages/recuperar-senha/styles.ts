import styled from 'styled-components';

export const ForgotPassword = styled.div`
    background: ${({ theme }) => theme.background.linearBlue};

    width: 100vw;
    height: 100vh;
`;

export const ContainerForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    padding: 0 24px;

    @media (min-width: 1024px) { padding: 0 32px; }
`;

export const Form = styled.form`
    background-color: ${({ theme }) => theme.colors.midnight};

    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100%;
    max-width: 500px;

    padding: 16px;
    gap: 16px;

    transition: all ease-in .2s;

    @media (min-width: 1024px) {
        padding: 24px;
        gap: 24px;
    }
`;