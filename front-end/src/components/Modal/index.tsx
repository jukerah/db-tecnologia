
import { useState, ReactNode } from 'react';
import Loading from '../Loading';
import * as C from "./styles";

interface ModalProps {
  isOpen: boolean;
  toggleModal?: () => void;
  isLoading?: boolean;
  children?: ReactNode;
}

export function Modal({ isOpen, toggleModal, children }: ModalProps) {
  const [ isLoading, setIsLoading ] = useState(false);

  return (
    <>
      <C.StyledModal
        isOpen={!isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}>
        <button onClick={toggleModal}>Close me</button>
      </C.StyledModal>

      {isLoading && <Loading />}
    </>
  );
}