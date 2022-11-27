import styled from "styled-components";

export const Navbar = styled.nav`
  display: none;

  * {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }

  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;

    li { list-style: none; }
    li, a, svg, button { transition: all ease-in .2s; }
    li, button { cursor: pointer; }

    gap: 32px;
  }

  .menu > li:nth-of-type(5) {
    margin-left: 32px;
    .list-dropdown { margin-left: -60px; }
  }

  .menu-item:hover { color: ${({ theme }) => theme.colors.cheese}; }

  @media (min-width: 1024px) {
    display: block;
  }
`;

export const Dropdown = styled.li`
  .menu-item {
    background-color: transparent;
    border: none;

    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 8px;
  }

  .list-dropdown {
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.black};

    display: none;
    justify-content: start;
    flex-direction: column;
    position: absolute;
    
    padding: 16px;
    gap: 16px;
    
    li:hover {
      text-decoration: underline;
      text-underline-offset: 4px;
    }

    .dropdown-item { color: ${({ theme }) => theme.colors.black}; }
    .dropdown-item:hover { color: ${({ theme }) => theme.colors.bayOfMany}; }
  }

  &:hover {
    .menu-item { color: ${({ theme }) => theme.colors.cheese}; }
    .list-dropdown { display: flex; }

    svg {
      transform: rotate(540deg);
      stroke: ${({ theme }) => theme.colors.cheese};
    }
  }
`
