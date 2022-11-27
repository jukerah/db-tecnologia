
import { useState, ReactNode } from 'react';
import Loading from '../../Loading';
import * as C from "./styles";

interface ModalProps {
  isOpened: boolean;
  toggleModal: () => void;
  children: ReactNode;
  isLoading: boolean;
}

export function Modal({ isOpened, toggleModal, isLoading, children }: ModalProps) {
  return (
    <>
      <C.StyledModal
        isOpen={isOpened}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        {children}
      </C.StyledModal>

      {isLoading && <Loading />}
    </>
  );
}