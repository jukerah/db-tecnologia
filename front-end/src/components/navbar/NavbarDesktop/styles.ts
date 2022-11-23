import styled from "styled-components";
import { theme } from "../../../styles/Theme";

export const Navbar = styled.nav`
  display: none;

  * {
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.md};
    font-weight: ${theme.fontWeight.regular};
  }

  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;

    li, a, button, svg { transition: all ease-in .2s; }

    li { list-style: none; }

    li, button { cursor: pointer; }

    li:hover, button:hover { color: ${theme.colors.cheese}; }

    gap: 32px;
  }

  .menu > li:nth-of-type(5) {
    margin-left: 32px;
    .list-dropdown { margin-left: -60px; }
  }

  button {
    background-color: transparent;
    border: 2px solid ${theme.colors.bayOfMany};

    padding: 8px 16px;
          
    &:hover {
      box-shadow: 0px 0px 16px rgba(256, 256, 256, 0.25);
      animation: rotate 1s infinite;
    }
    
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
  }

  @media (min-width: 1024px) {
    display: block;
  }
`;

export const Dropdown = styled.li`
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 8px;
  }

  a:hover {
    color: ${theme.colors.cheese};
    svg {
      stroke: ${theme.colors.cheese};
    }
  }

  li:hover { color: ${theme.colors.bayOfMany} !important; }

  .list-dropdown {
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.black};

    display: none;
    justify-content: start;
    flex-direction: column;
    position: absolute;

    padding: 16px;
    gap: 16px;

    li {
      color: ${theme.colors.black};
      font-size: ${theme.fontSizes.md};
    }

    li:hover {
      text-decoration: underline;
    }
  }

  &:hover {
    a { color: ${theme.colors.cheese}; }
    .list-dropdown { display: flex; }

    svg {
      transform: rotate(540deg);
      stroke: ${theme.colors.cheese};
    }
  }
`
