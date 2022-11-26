import { ReactNode, ButtonHTMLAttributes } from 'react';
import * as C from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isOpened: () => void;
}

export function ModalButton({ children, isOpened }: ButtonProps) {
  return (
    <C.Button onClick={isOpened}>
      {children}
    </C.Button>
  );
}