import styled from 'styled-components';

export const Index = styled.div`
    background: ${({ theme }) => theme.background.linearBlue};
    
    display: flex;
    flex-direction: column;

    width: 100%;
`;

export const Container = styled.div`
    background: ${({ theme }) => theme.background.white};
`;

export const Pages = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Home = styled.section`
    background: ${({ theme }) => theme.background.linearBlue};

    display: flex;
    align-items: center;
    flex-direction: column;

    padding: 100px 24px 40px 24px;
    gap: 32px;

    h1 {
        background-image: linear-gradient(60deg, rgba(173, 191, 255, .9), rgba(164, 255, 211, .9), rgba(254, 233, 161, 0.9), rgba(173, 191, 255, .9), rgba(164, 255, 211, .9), rgba(256, 256, 256, .9), rgba(254, 233, 161, .9), rgba(173, 191, 255, .9), rgba(164, 255, 211, .9), rgba(254, 233, 161, 0.9), rgba(173, 191, 255, .9), rgba(164, 255, 211, .9), rgba(254, 233, 161, .9));
        background-size: 800% 800%;

        max-width: 400px;

        @keyframes rainbow { 
            0% { background-position:0% 50%; }
            50% { background-position:100% 25%; }
            100% { background-position:0% 50%; }
        }

        animation: rainbow 18s ease infinite;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        font-weight: ${({ theme }) => theme.fontWeight.semiRegular};
        font-size: ${({ theme }) => theme.fontSizes.tmd};
        text-align: center;
    }

    .social-media {
        display: flex;
        justify-content: center;

        gap: 48px;

        svg {
            cursor: pointer;

            &:hover {
                fill: ${({ theme }) => theme.colors.cheese};
            }
        }
    }

    button {
        max-width: 320px;
        text-transform: uppercase;
    }

    @media (min-width: 768px) {
        h1 {
            max-width: 530px;
            font-size: ${({ theme }) => theme.fontSizes.tlg};
        }
    }

    @media (min-width: 1024px) {
        h1 {
            max-width: 900px;
            font-size: ${({ theme }) => theme.fontSizes.txl};
            animation: rainbow 12s ease infinite;
        }

        .social-media {
            svg {
                width: 64px;
                height: 64px;
            }
        }

        button { max-width: 380px; }

        padding: 128px 24px 40px 24px;
        gap: 48px;
    }
`;

export const PitchBar = styled.div`
    background: ${({ theme }) => theme.colors.midnight};

    display: flex;
    justify-content: center;

    width: 100%;

    .container {
        display: flex;
        justify-content: center;
        flex-direction: column;

        max-width: 1400px;

        padding: 32px;
        gap: 24px;
    }

    .pitchbar-item {
        display: flex;
        align-items: center;
        flex-direction: column;

        gap: 24px;

        p {
            color: ${({ theme }) => theme.colors.white};

            font-size: ${({ theme }) => theme.fontSizes.md};
            font-weight: ${({ theme }) => theme.fontWeight.semiRegular};
            text-align: center;
            line-height: 150%;
        }
    }

    @media (min-width: 1024px) {
        .container { flex-direction: row; }

        .pitchbar-item {
            p { font-size: ${({ theme }) => theme.fontSizes.lg}; }
        }
    }
`;


export const Services = styled.section`
    background: ${({ theme }) => theme.background.linearGray};

    display: flex;
    align-items: center;
    flex-direction: column;

    padding-top: 72px;

    .container {
        display: flex;
        align-items: center;
        flex-direction: column;
        
        max-width: 1400px;

        padding: 0 24px 40px 24px;
        gap: 32px;

        @media (min-width: 1024px) {
            padding: 0 32px 40px 32px;
            gap: 56px;
        }
    }

    .container-card {
        display: grid;
        grid-template-columns: 1fr;

        width: 100%;
        gap: 16px;

        @media (min-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (min-width: 1024px) {
            gap: 24px; 
        }
    }

    .card {
        background-color: ${({ theme }) => theme.colors.white};
        box-shadow: ${({ theme }) => theme.shadows.sm};
        display: flex;
        align-items: center;
        flex-direction: column;
        
        width: 100%;

        padding: 24px;
        gap: 16px;

        @media (min-width: 1024px) {
            padding: 32px;
            gap: 8px;
        }
    }

    .card-header {
        display: flex;
        align-items: center;
        flex-direction: column;

        width: 100%;
        gap: 8px;

        @media (min-width: 1024px) {
            align-items: center;
            flex-direction: row;

            svg {
                width: 64px;
                height: 64px;
            }
        }
    }

    .card-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;

        height: 100%;
        gap: 24px;

        p, a {
            color: ${({ theme }) => theme.colors.black};
            font-size: ${({ theme }) => theme.fontSizes.sm};
        }

        p {
            font-weight: ${({ theme }) => theme.fontWeight.regular};
            text-indent: 16px;
            line-height: 150%;
        }

        a {
            font-weight: ${({ theme }) => theme.fontWeight.bold};
            display: flex;
            align-items: center;
            gap: 8px;

            &:hover {
                color: ${({ theme }) => theme.colors.luckPoint};
                svg {
                    fill: ${({ theme }) => theme.colors.luckPoint};
                }
            }
        }

        @media (min-width: 1024px) {
            p, a {
                color: ${({ theme }) => theme.colors.black};
                font-size: ${({ theme }) => theme.fontSizes.md};
            }
        }
    }

    .pitchbar {
        background-color: ${({ theme }) => theme.colors.midnight};

        display: flex;
        align-items: center;
        flex-direction: column;

        width: 100%;

        padding: 40px 24px;
        gap: 40px;

        button { max-width: 380px; }

        @media (min-width: 1024px) {
            padding: 56px 0;
            gap: 32px;
        }
    }

    .pitchbar-info {
        display: flex;
        align-items: center;
        flex-direction: column;

        gap: 24px;

        p {
            color: ${({ theme }) => theme.colors.white};
            font-size: ${({ theme }) => theme.fontSizes.lg};
            width: 250px;
        }

        span {
            color: ${({ theme }) => theme.colors.cheese};
            font-size: ${({ theme }) => theme.fontSizes.tmd};
            font-weight: ${({ theme }) => theme.fontWeight.bold};
        }

        @media (min-width: 768px) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            justify-content: space-between;

            p { width: 100%; }     
        }

        @media (min-width: 1024px) {
            display: flex;
            justify-content: space-between;
            flex-direction: row;

            width: 100%;
            max-width: 1400px;

            padding: 0 32px;

            p { width: auto; }

            span { font-size: ${({ theme }) => theme.fontSizes.tlg}; }
        }
    }
`;