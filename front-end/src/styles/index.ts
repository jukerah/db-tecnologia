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

    .list-service {
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

    @media (min-width: 1024px) {
        padding-top: 104px;
    }
`;

export const Portfolio = styled.section`
    background: ${({ theme }) => theme.background.linearGray};

    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100%;

    .container {
        display: flex;
        align-items: center;
        flex-direction: column;

        width: 100%;
        max-width: 1400px;

        padding: 72px 24px 40px 24px;
        gap: 16px;
        
        @media (min-width: 1024px) {
            padding: 104px 32px 56px 32px;
            gap: 24px;
        }
    }

    .header {
        width: 100%;

        p {
            color: ${({ theme }) => theme.colors.black};
            font-size: ${({ theme }) => theme.fontSizes.sm};
            text-align: center;

            margin-top: 32px;
            margin-bottom: 8px;
        }

        h2 {
            color: ${({ theme }) => theme.colors.luckPoint};
            font-size: ${({ theme }) => theme.fontSizes.md};
            text-align: center;
        }

        @media (min-width: 1024px) {
            p {
                font-size: ${({ theme }) => theme.fontSizes.lg};

                margin-top: 56px;
                margin-bottom: 16px;
            }
        }
    }

    .container-project {
        display: flex;
        align-items: center;
        flex-direction: column;

        width: 100%;
        gap: 16px;
        
        button {
            background: transparent;
            border: none;

            display: flex;
            align-items: center;

            color: ${({ theme }) => theme.colors.luckPoint};
            font-size: ${({ theme }) => theme.fontSizes.md};
            font-weight: ${({ theme }) => theme.fontWeight.semiBold};

            padding: 8px;
            gap: 8px;
            cursor: pointer;

        }

        @media (min-width: 1024px) {
            gap: 24px;
            button {
                font-size: ${({ theme }) => theme.fontSizes.lg};
                border-bottom: 2px solid transparent;
                padding: 0;

                &:hover {
                    border-bottom: 2px solid ${({ theme }) => theme.colors.luckPoint};
                }
            }
        }
    }

    .list-project {
        display: grid;
        grid-template-columns: repeat(1, 1fr);

        width: 100%;
        gap: 16px;

        @media (min-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (min-width: 1024px) { gap: 24px; }
    }

    .card {
        display: flex;
        justify-content: flex-end;
        align-items: start;
        flex-direction: column;
        overflow: hidden;

        width: 100%;
        max-height: 470px;

        img {
            width: 100%;
            height: 100%;
        }

        span {
            background-color: ${({ theme }) => theme.colors.cheese};
            color: ${({ theme }) => theme.colors.black};

            font-size: ${({ theme }) => theme.fontSizes.md};
            font-weight: ${({ theme }) => theme.fontWeight.bold};

            display: none;
            position: absolute;

            padding: 16px 24px;
        }

        @media (min-width: 1024px) {
            &:hover {
                span { display: flex; }
            }
        }

        @media (min-width: 1400px) { img { height: auto; } }
    }
`;

export const AboutUs = styled.section`
    background: ${({ theme }) => theme.background.linearGray};

    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100%;

    .container {
        display: flex;
        align-items: center;
        flex-direction: column;

        width: 100%;
        max-width: 1400px;

        padding: 72px 24px 40px 24px;
        gap: 32px;
        
        @media (min-width: 1024px) {
            padding: 104px 32px 56px 32px;
            gap: 56px;
        }
    }

    .about-company,
    .about-ceo {
        color: ${({ theme }) => theme.colors.black};

        font-size: ${({ theme }) => theme.fontSizes.sm};
        line-height: 150%;
        text-indent: 16px;

        @media (min-width: 1024px) {
            font-size: ${({ theme }) => theme.fontSizes.md};
        }
    }

    .team {
        display: flex;
        align-items: center;
        flex-direction: column;

        width: 100%;
        gap: 16px;

        @media (min-width: 768px) { gap: 24px; }
    }

    .ceo {
        display: flex;
        align-items: center;
        flex-direction: column;

        width: 100%;
        max-width: 900px;

        gap: 16px;

        img {
            background-color: ${({ theme }) => theme.colors.grayLight};
            border-radius: 50%;

            width: 128px;
            height: 128px;

            padding: 10px;
        }

        @media (min-width: 768px) {
            flex-direction: row;

            gap: 56px;
            
            img {
                width: 250px;
                height: 250px;
                padding: 16px;
            }
        }
    }

    .list-employee {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        width: 100%;
        gap: 16px;

        img {
            background-color: ${({ theme }) => theme.colors.grayLight};
            border-radius: 50%;

            width: 64px;
            height: 64px;

            padding: 4px;
        }

        @media (min-width: 1024px) {
            flex-direction: row;
            gap: 24px;
            
            img {
                width: 100px;
                height: 100px;
                padding: 8px;
            }
        }
    }
`;

export const Contact = styled.section`
    background: ${({ theme }) => theme.background.linearGray};

    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100%;

    .container {
        display: flex;
        align-items: center;
        flex-direction: column;

        width: 100%;
        max-width: 1400px;

        padding: 72px 24px 40px 24px;
        gap: 16px;
        
        @media (min-width: 1024px) {
            padding: 104px 32px 56px 32px;
            gap: 56px;
        }
    }

    .contact {
        display: flex;
        align-items: center;
        flex-direction: column;

        gap: 16px;

        @media (min-width: 1024px) {
            align-items: start;
            flex-direction: row;
            gap: 24px;
        }
    }

    .container-info {
        display: flex;
        align-items: center;
        flex-direction: column;

        flex: 1;
        gap: 16px;

        @media (min-width: 1024px) {
            align-items: start;
            gap: 24px;
        }
    }

    .description {
        font-size: ${({ theme }) => theme.fontSizes.sm};
        text-align: center;
        line-height: 150%;

        @media (min-width: 1024px) {
            font-size: ${({ theme }) => theme.fontSizes.tsm};
        }
    }

    .commercial-service {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 8px;

        h2 {
            color: ${({ theme }) => theme.colors.luckPoint};
            font-size: ${({ theme }) => theme.fontSizes.md};
        }

        p {
            color: ${({ theme }) => theme.colors.black};
            font-size: ${({ theme }) => theme.fontSizes.sm};
        }

        @media (min-width: 1024px) {
            align-items: start;
            h2 { font-size: ${({ theme }) => theme.fontSizes.tsm}; }
            p { font-size: ${({ theme }) => theme.fontSizes.lg}; }
        }
    }
    
    .contact-details {
        display: flex;
        align-items: start;
        flex-direction: column;
        gap: 16px;

        @media (min-width: 1024px) { gap: 24px; }
    }

    .detail-item {
        display: flex;
        align-items: center;

        width: auto;
        gap: 16px;

        color: ${({ theme }) => theme.colors.black};
        font-size: ${({ theme }) => theme.fontSizes.sm};

        @media ( min-width: 1024px) {
            font-size: ${({ theme }) => theme.fontSizes.lg};

            svg {
                width: 40px;
                height: 40px;
            }
        }
    }

    .contact-form {
        display: flex;
        flex-direction: column;

        width: 100%;
        padding: 16px;
        gap: 16px;

        &,
        input,
        textarea {
            border: 2px solid ${({ theme }) => theme.colors.grayLight};
        }

        input,
        button { height: 56px; }

        @media ( max-width: 1023px) { max-width: 500px; }

        @media ( min-width: 1024px) {
            flex: 1;
            padding: 24px;
            gap: 24px;
            button { height: 80px; }
        }
    }

    .container-input {
        display: flex;
        flex-direction: column;
        gap: 8px;

        label {
            color: ${({ theme }) => theme.colors.black};
            font-size: ${({ theme }) => theme.fontSizes.sm};
            font-weight: ${({ theme }) => theme.fontWeight.bold};     
        }

        .alert {
            font-size: ${({ theme }) => theme.fontSizes.sm};
            color: ${({ theme }) => theme.colors.coralRed};
        }

        @media ( min-width: 1024px) {
            label { font-size: ${({ theme }) => theme.fontSizes.lg}; }
            .alert { font-size: ${({ theme }) => theme.fontSizes.md}; }
        }
    }
`;