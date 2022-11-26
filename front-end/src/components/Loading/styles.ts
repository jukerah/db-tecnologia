import styled from "styled-components";

export const Loading = styled.div`
  background-color: rgba(256, 256, 256, 0.7);
  backdrop-filter: blur(10px);

  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 2;

  width: 100vw;
  height: 100vh;

  top: 0;
  left: 0;

  svg { animation: rotation 2s infinite; }

  @keyframes rotation {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;