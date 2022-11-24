import styled from "styled-components";
import { theme } from "../../../styles/Theme";

interface MenuButtonProps {
  isOpened: boolean;
}

export const MenuButton = styled.button<MenuButtonProps>`
  background-color: transparent;
  border: none;

  display: flex;
  flex-direction: column;

  padding: 8px;
  gap: 8px;
  cursor: pointer;

  div {
    background-color: ${theme.colors.white};
    border-radius: 2px;

    width: 40px;
    height: 4px;

    transition: all ease-in .5s;
  }

  div:nth-of-type(1) {
      transform: ${(props) => props.isOpened ? 'rotate(45deg)' : 'none'};
      position: relative;
      top: ${(props) => props.isOpened ? '12px' : 0};
  }

  div:nth-of-type(2) {
      opacity: ${(props) => props.isOpened ? 0 : 100};
      position: relative;
      right: ${(props) => props.isOpened ? '-100px' : 0};
  }

  div:nth-of-type(3) {
      transform: ${(props) => props.isOpened ? 'rotate(-45deg)' : 'none'};
      position: relative;
      top: ${(props) => props.isOpened ? '-12px' : 0};
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

interface NavbarProps {
  isOpened: boolean;
}

export const Navbar = styled.nav<NavbarProps>`
  background-color: ${theme.colors.white};

  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;

  width: 100%;
  height: calc(100vh - 60px);

  padding: 24px;
  top: 60px;
  left: ${(props) => props.isOpened ? 0 : '100vw'};

  transition: all ease-in .5s;

  overflow-y: scroll;

  ::-webkit-scrollbar { width: 6px; }

  ::-webkit-scrollbar-thumb {
      background: ${theme.colors.luckPoint}; 
      border-radius: 4px;
  }

  * {
    color: ${theme.colors.black};
    font-size: ${theme.fontSizes.lg};
    font-weight: ${theme.fontWeight.regular};
  }

  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    svg { transition: all ease-in .2s; }

    li { list-style: none; }

    li, button { cursor: pointer; }

    gap: 32px;
  }

  .options { margin-top: 24px; }

  button {
    background-color: transparent;
    border: none;

    padding: 8px 16px;
    margin-top: 24px;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

interface DropdownProps {
  isOpened: boolean;
}

export const Dropdown = styled.li<DropdownProps>`
  a {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 8px;
  }

  svg {
    transform: ${(props) => props.isOpened ? 'rotate(540deg)' : 'none'};
  }

  .list-dropdown {
    display: ${(props) => props.isOpened ? 'flex': 'none'};
    justify-content: start;
    align-items: center;
    flex-direction: column;

    padding: 16px;
    gap: 24px;

    li { font-size: ${theme.fontSizes.md}; }
  }
`
