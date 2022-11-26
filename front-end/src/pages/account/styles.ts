import styled from 'styled-components';
import { theme } from '../../styles/Theme';

export const AdminPanel = styled.div`
    background: ${theme.colors.white};

    display: flex;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    h1 {
        color: ${theme.colors.luckPoint};

        font-size: ${theme.fontSizes.tsm};
        font-weight: ${theme.fontWeight.semiBold};
        text-align: center;
    }

    @media (min-width: 1024px) {
        h1 { font-size: ${theme.fontSizes.tlg}; }
    }
`;

export const ContainerAdminPanel = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 1400px;

    padding: 84px 24px 40px 24px;
    gap: 24px;

    .container-button {
        display: grid;
        grid-template-columns: 1fr;
        align-self: center;

        width: 100%;
        gap: 16px;
    }

    @media (min-width: 768px) {
        .container-button { grid-template-columns: repeat(2, 1fr); }
    }

    @media (min-width: 1024px) {
        h1 { font-size: ${theme.fontSizes.tlg}; }
        padding: 136px 32px 40px 32px;
        gap: 48px;

        .container-button { gap: 24px; }
    }
`;