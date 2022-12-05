import styled from 'styled-components';

export const Title = styled.h2`
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    text-align: center;

    @media (min-width: 1024px) {
        font-size: ${({ theme }) => theme.fontSizes.tsm};
        text-align: start;
    }
`;