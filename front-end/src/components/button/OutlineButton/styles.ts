import styled from "styled-components";
import { theme } from "../../../styles/Theme";

export const Button = styled.nav`
  background-color: transparent;
  border: 2px solid ${theme.colors.bayOfMany};

  padding: 8px 16px;
        
  &:hover {
    color: ${theme.colors.cheese};
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
`;