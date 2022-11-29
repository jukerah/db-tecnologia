import Modal from "styled-react-modal";
import styled from "styled-components";

export const StyledModal = Modal.styled`
  background-color: ${({ theme }) => theme.colors.midnight};
  backdrop-filter: blur(8px);
  backdrop-filter: blur(10px);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  max-width: 500px;

  padding: 16px;
  gap: 16px;

  transition: all ease-in .2s;

  @media (min-width: 1024px) {
    padding: 24px;
  }
`;

export const SpecialModalBackground = styled.div`
    background-color: rgba(256, 256, 256, 0.1);
    backdrop-filter: blur(8px);

    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1;

    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    padding: 24px;

    @media (min-width: 1024px) {
        padding: 32px;
    }
`;