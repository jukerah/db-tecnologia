import styled from "styled-components";

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.midnight};

  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 1;

  width: 100%;
  height: 60px;

  top: 0;
  padding: 0 16px 0 24px;

  &, .logo { transition: all ease-in .2s; }

  @media (min-width: 1024px) {
    height: 96px;
    padding: 0 32px;

    .logo {
      width: 160px;
      height: 64px;
    }
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;  
  max-width:1400px;
`;