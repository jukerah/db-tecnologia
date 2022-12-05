import styled from 'styled-components';

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.luckPoint};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    text-align: center;

    span { font-weight: ${({ theme }) => theme.fontWeight.regular}; }

    @media (min-width: 1024px) {
        font-size: ${({ theme }) => theme.fontSizes.tmd};
    }
`;