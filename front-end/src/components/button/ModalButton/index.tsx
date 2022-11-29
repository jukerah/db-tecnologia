import { ReactNode, ButtonHTMLAttributes } from 'react';
import * as C from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isOpened: () => void;
  backgroundColor: string;
  color: string;
}

export function ModalButton({ children, isOpened, backgroundColor, color }: ButtonProps) {
  return (
    <C.Button
      onClick={isOpened}
      backgroundColor={backgroundColor}
      color={color}
    >
      {children}
    </C.Button>
  );
}