import styled from 'styled-components';

export const Title = styled.h2`
    color: ${({ theme }) => theme.colors.cheese};

    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    text-align: center;

    width: fit-content;

    padding-bottom: 8px;

    transition: all ease-in .2s;

    border-image-source: linear-gradient(to left, #B8A14F, #49B983, #B8A14F);
    border-bottom: 4px solid;
    border-image-slice: 1;

    animation: rotate 4s infinite;

    @keyframes rotate {
      0% {
          border-image: linear-gradient(to bottom right, #B8A14F 0%, #49B983 20%, #6782CD 40%, #B8A14F 60%, #49B983 80%, #6782CD 100%);
          border-image-slice: 1;
      }

      33% {
          border-image: linear-gradient(to bottom right, #6782CD 0%, #B8A14F 20%, #49B983 40%, #6782CD 60%, #B8A14F 80%, #49B983 100%);
          border-image-slice: 1;
      }

      66% {
          border-image: linear-gradient(to bottom right, #49B983 0%, #6782CD 20%, #B8A14F 40%, #49B983 60%, #6782CD 80%, #B8A14F 100%);
          border-image-slice: 1;
      }

      100% {
          border-image: linear-gradient(to bottom right, #B8A14F 0%, #49B983 20%, #6782CD 40%, #B8A14F 60%, #49B983 80%, #6782CD 100%);
          border-image-slice: 1;
      }
    }


    @media (min-width: 1024px) {
        font-size: ${({ theme }) => theme.fontSizes.tmd};
    }
`;