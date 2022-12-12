import styled from 'styled-components';

export const Custom500 = styled.div`
    background: ${({ theme }) => theme.colors.white};

    display: flex;
    justify-content: center;

    width: 100vw;
    height: 100vh;
`;

export const ContainerCustom500 = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 1400px;

    padding: 84px 24px 40px 24px;
    gap: 24px;

    h1 {
        color: ${({ theme }) => theme.colors.luckPoint};
        font-size: ${({ theme }) => theme.fontSizes.tsm};
        font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    }

    p {
        color: ${({ theme }) => theme.colors.black};
        font-size: ${({ theme }) => theme.fontSizes.sm};
        font-weight: ${({ theme }) => theme.fontWeight.regular};
    }

    h1, p { text-align: center; }

    @media (min-width: 1024px) {
        h1 { font-size: ${({ theme }) => theme.fontSizes.tlg}; }
        p { font-size: ${({ theme }) => theme.fontSizes.md}; }
        padding: 136px 32px 40px 32px;
    }
`;