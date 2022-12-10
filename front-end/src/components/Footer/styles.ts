import styled from 'styled-components';

export const Footer = styled.footer`
    background: ${({ theme }) => theme.colors.luckPoint};
    * { color: ${({ theme }) => theme.colors.white}; }

    display: flex;
    align-items: center;
    flex-direction: column;

    padding: 24px 0;
    gap: 24px;

    h2,
    h3 { font-size: ${({ theme }) => theme.fontSizes.md}; }

    p,
    a { font-size: ${({ theme }) => theme.fontSizes.sm}; }

    .container-nav {
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        width: 100%;
        max-width: 1400px;

        padding: 0 24px;
        gap: 16px;
    }

    .container {
        display: flex;
        align-items: center;
        flex-direction: column;

        width: auto;
        gap: 16px;

        svg {
            width: 160px;
            height: 64px;
        }
    }

    .social-media {
        display: flex;
        align-items: center;
        gap: 24px;

        svg {
            width: 32px;
            height: 32px;
        }
    }

    .contact {
        background: #2F3B87;

        display: flex;
        align-items: center;
        flex-direction: column;
        
        text-align: center;

        border-radius: 16px;
        padding: 16px;
        gap: 16px;
    }

    .copyright {
        display: flex;
        flex-direction: column;
        text-align: center;

        padding: 0 24px;
        gap: 16px;

        a { font-weight: ${({ theme }) => theme.fontWeight.bold}; }
    }

    @media (min-width: 1024px) {
        .container-nav {
            flex-direction: row;
            padding: 0 32px;
        }

        .container { align-items: start; }
    }

    @media (min-width: 1250px) {
        padding: 32px 0;
        gap: 40px;

        h2,
        h3 { font-size: ${({ theme }) => theme.fontSizes.lg}; }

        p,
        a { font-size: ${({ theme }) => theme.fontSizes.md}; }

        .container {
            svg {
                width: 240px;
                height: 96px;
            }
        }

        .social-media {
            padding: 0 32px;
            svg {
                width: 40px;
                height: 40px;
            }
        }
    }
`;