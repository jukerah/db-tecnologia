import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Header = styled.header`
  background-color: ${theme.colors.midnight};

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 1;

  width: 100%;
  height: 60px;

  top: 0;
  padding: 0 24px;

  &, img { transition: all ease-in .2s; }

  @media (min-width: 1024px) {
    height: 96px;
    padding: 0 32px;

    img {
      width: 160px;
      height: 64px;
    }
  }
`;