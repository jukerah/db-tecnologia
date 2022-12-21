import styled from 'styled-components';

export const AdminPanel = styled.div`
    background: ${({ theme }) => theme.colors.white};

    display: flex;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    h1 {
        color: ${({ theme }) => theme.colors.luckPoint};

        font-size: ${({ theme }) => theme.fontSizes.tsm};
        font-weight: ${({ theme }) => theme.fontWeight.semiBold};
        text-align: center;
    }

    @media (min-width: 1024px) {
        h1 { font-size: ${({ theme }) => theme.fontSizes.tlg}; }
    }
`;

export const ContainerAdminPanel = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 1400px;

    padding: 84px 24px 40px 24px;
    gap: 24px;

    .container-info {
        display: flex;
        flex-direction: column;
        gap: 8px;
        
        p { 
            color: ${({ theme }) => theme.colors.black};
            font-size: ${({ theme }) => theme.fontSizes.sm};
        }
        
        span {
            color: ${({ theme }) => theme.colors.luckPoint};
            font-weight: ${({ theme }) => theme.fontWeight.semiBold};
        }
    }

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
        h1 { font-size: ${({ theme }) => theme.fontSizes.tlg}; }
        padding: 136px 32px 40px 32px;
        gap: 48px;

        .container-info {
            p { font-size: ${({ theme }) => theme.fontSizes.lg}; }
        }
        .container-button { gap: 24px; }
    }
`;