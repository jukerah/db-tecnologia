import Modal from 'styled-react-modal'

import { theme } from "../../styles/Theme";

export const StyledModal = Modal.styled`
  background-color: ${theme.colors.midnight};
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
`;