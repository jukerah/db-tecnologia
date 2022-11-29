import styled from 'styled-components';

export const LabelInputFile = styled.label`
  background-color: ${({ theme }) => theme.colors.white};
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 170px;

  cursor: pointer;

  input { display: none; }

  span {
    color: ${({ theme }) => theme.colors.black};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    
    position: absolute;
    opacity: .7;

    svg { transition: all 0.5s; }
  }

  img {
    width: 100%;
    height: auto;
  }

  &:hover span svg {
    opacity: 1;
    transform: scale(2);
  }
`;

interface TextFieldProps {
    search: boolean;
}

export const TextField = styled.input<TextFieldProps>`
    color: ${({ theme }) => theme.colors.black};

    width: 100%;
    height: 48px;

    font-size: ${({ theme }) => theme.fontSizes.sm};

    padding: 0 48px 0 16px;
    border: ${(props) => props.search ? '1px solid' : 'none'};
    border-color: ${({ theme }) => theme.colors.luckPoint};

    &::placeholder {
        color: ${({ theme }) => theme.colors.placeholder};
    }

    outline: none;

    ${(props) => props.search && `
        background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_216_24)'%3E%3Cpath d='M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z' stroke='%231B1A70' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M21 21L15 15' stroke='%231B1A70' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_216_24'%3E%3Crect width='24' height='24' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: 96%;
        background-size: 24px;
    `}

    @media (min-width: 1024px) {
        height: 56px;
        
        font-size: ${({ theme }) => theme.fontSizes.md};
    }
`;
