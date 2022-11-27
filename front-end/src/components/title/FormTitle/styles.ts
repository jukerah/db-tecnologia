import styled from 'styled-components';

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.sunflower};

    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: 700;
    text-align: center;

    width: fit-content;

    padding-bottom: 8px;
    margin-bottom: 8px;

    border-image-source: linear-gradient(to left, #B8A14F, #49B983, #B8A14F);
    border-bottom: 10px solid;
    border-image-slice: 1;
    border-width: 5px;

    transition: all ease-in .2s;

    @media (min-width: 1024px) {
        font-size: ${({ theme }) => theme.fontSizes.tmd};
        margin-bottom: 16px;
    }
`;