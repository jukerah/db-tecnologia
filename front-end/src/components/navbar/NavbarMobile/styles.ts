import styled from "styled-components";

interface MenuButtonProps {
  isOpened: boolean;
}

export const MenuButton = styled.button<MenuButtonProps>`
  background-color: transparent;
  border: none;

  display: flex;
  flex-direction: column;

  padding: 10px;
  gap: 8px;
  cursor: pointer;

  div {
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 1px;

    width: 32px;
    height: 2px;

    transition: all ease-in .5s;
  }

  div:nth-of-type(1) {
    transform: ${(props) => props.isOpened ? 'rotate(405deg)' : 'none'};
    position: relative;
    top: ${(props) => props.isOpened ? '10px' : 0};
  }

  div:nth-of-type(2) {
    transform: ${(props) => props.isOpened ? 'rotate(-405deg)' : 'none'};
    opacity: ${(props) => props.isOpened ? 0 : 100}; 
    position: relative;
    top: ${(props) => props.isOpened ? '10px' : 0};
  }

  div:nth-of-type(3) {
    transform: ${(props) => props.isOpened ? 'rotate(-405deg)' : 'none'};
    position: relative;
    top: ${(props) => props.isOpened ? '-10px' : 0};
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

interface NavbarProps {
  isOpened: boolean;
}

export const Navbar = styled.nav<NavbarProps>`
  background-color: ${({ theme }) => theme.colors.white};

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
      background: ${({ theme }) => theme.colors.luckPoint}; 
      border-radius: 4px;
  }

  * {
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }

  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    svg { transition: all ease-in .2s; }

    li { list-style: none; }

    gap: 32px;
  }

  .options, .login { margin-top: 24px; }

  @media (min-width: 1024px) {
    display: none;
  }
`;

interface DropdownProps {
  isOpened: boolean;
}

export const Dropdown = styled.li<DropdownProps>`
  display: flex;
  flex-direction: column;

  a, button {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 8px;
    cursor: pointer;
  }

  button {
    background: transparent;
    border: none;
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

    .dropdown-item { font-size: ${({ theme }) => theme.fontSizes.md}; }
  }
`
