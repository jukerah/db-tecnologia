import styled from 'styled-components';
import { theme } from '../../styles/Theme';

export const Login = styled.div`
    background: ${theme.background.linearBlue};

    width: 100vw;
    height: 100vh;
`;

export const ContainerLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    padding: 0 24px;

    @media (min-width: 1024px) { padding: 0 32px; }
`;

export const Form = styled.form`
    background-color: ${theme.colors.midnight};

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