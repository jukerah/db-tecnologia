import styled from 'styled-components';

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