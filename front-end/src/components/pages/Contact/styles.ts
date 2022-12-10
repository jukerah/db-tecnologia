import styled from 'styled-components';

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