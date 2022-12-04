import styled from 'styled-components';

export const Projects = styled.div`
    background: ${({ theme }) => theme.colors.white};

    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100%;
    height: 100vh;
`;

export const ContainerProjects = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;

    width: 100%;
    max-width: 1400px;

    padding: 84px 24px 40px 24px;
    gap: 24px;

    h1 {
        color: ${({ theme }) => theme.colors.luckPoint};

        font-size: ${({ theme }) => theme.fontSizes.tsm};
        font-weight: ${({ theme }) => theme.fontWeight.semiBold};
        text-align: center;
    }

    @media (min-width: 1024px) {
        h1 { font-size: ${({ theme }) => theme.fontSizes.tlg}; }
        padding: 136px 32px 40px 32px;
        gap: 48px;
    }
`;

export const ContainerHeader = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    gap: 16px;

    @media (min-width: 768px) {
        flex-direction: row;
        gap: 24px;

        button { width: auto; }
        input { max-width: 400px; }
    }
`;

export const GridProjects = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
    }

    @media (min-width: 1400px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

export const Project = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100%;
    max-height: 400px;

    box-shadow: 0px 0px 8px rgba(27, 26, 112, 0.25);

    padding: 16px;
    gap: 16px;

    transition: all ease-in 1s;

    h2 {
        color: ${({ theme }) => theme.colors.luckPoint};
        font-size: ${({ theme }) => theme.fontSizes.md};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        text-align: center;
    }

    .banner {
        display: flex;
        align-items: start;
        overflow: hidden;

        width: 100%;
        height: auto;

        img {
            width: 100%;
            height: auto;
        }
    }

    .container-button {
        display: flex;
        gap: 16px;

        button { padding: 0 16px; }
    }

    @media (min-width: 768px) {
        .banner { max-height: 300px; }
    }

    @media (min-width: 1024px) {
        .banner { max-height: 300px; }
        .container-button {
            gap: 24px;
            button { font-size: ${({ theme }) => theme.fontSizes.md}; }
        }
    }

    @media (min-width: 1400px) {
        .banner { max-height: 180px; }
    }
`;