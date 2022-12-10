import styled from 'styled-components';

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