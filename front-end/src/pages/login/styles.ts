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

    h1 {
        color: ${theme.colors.sunflower};

        font-size: ${theme.fontSizes.lg};
        font-weight: 700;
        text-align: center;

        width: fit-content;

        padding-bottom: 8px;
        margin-bottom: 8px;

        border-image-source: linear-gradient(to left, #B8A14F, #49B983, #B8A14F);
        border-bottom: 10px solid;
        border-image-slice: 1;
        border-width: 5px;

        transition: all ease-in .2s;
    }

    .forgot-password {
        color: ${theme.colors.white};
        font-size: ${theme.fontSizes.sm};
        
        &:hover { text-decoration: underline; }
    }

    @media (min-width: 1024px) {
        h1 {
            font-size: ${theme.fontSizes.tmd};
            margin-bottom: 16px;
        }

        .forgot-password {
            color: ${theme.colors.white};
            font-size: ${theme.fontSizes.md};
            text-decoration: none;
        }

        padding: 24px;
        gap: 24px;
    }
`;