import styled from "styled-components";

export const Loading = styled.div`
  background-color: rgba(256, 256, 256, 0.7);
  backdrop-filter: blur(4px);

  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999;

  width: 100vw;
  height: 100vh;

  top: 0;
  left: 0;

  .spinner {
    display: flex;
    position: fixed;
    z-index: 1031;
    top: calc(50% - 40px);
    right: calc(50% - 40px);
  }

  .spinner-icon {
    width: 80px;
    height: 80px;
    box-sizing: border-box;

    border: solid 16px transparent;
    border-top-color: ${({ theme }) => theme.colors.luckPoint};
    border-left-color: ${({ theme }) => theme.colors.bayOfMany};
    border-radius: 50%;

    animation: spinner 400ms linear infinite;
  }

  @keyframes spinner {
    0%   { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
`;