import styled from 'styled-components';

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