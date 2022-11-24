import { ReactNode, ButtonHTMLAttributes } from 'react';

import * as C from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function OutlineButton({ children }: ButtonProps) {
  return (
    <C.Button>
        {children}
    </C.Button>
  )
}
