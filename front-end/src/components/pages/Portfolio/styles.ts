import styled from 'styled-components';

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
            gap: 8px;
        }

        @media (min-width: 1024px) {
            &:hover {
                span { display: flex; }
            }
        }

        @media (min-width: 1400px) { img { height: auto; } }
    }
`;