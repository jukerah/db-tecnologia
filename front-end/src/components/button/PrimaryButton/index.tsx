import { ReactNode, ButtonHTMLAttributes } from 'react';
import * as C from "./styles";

import { FaSpinner } from 'react-icons/fa';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: ReactNode;
  backgroundColor: string;
  color: string;
}

export function PrimaryButton({ loading, children, backgroundColor, color,  ...rest }: ButtonProps) {
  return (
    <C.Button
      {...rest}
      backgroundColor={backgroundColor}
      color={color}
    >
      {loading ? (
        <FaSpinner color={color} size={24} />
      ) : (
        <a>{children}</a>
      )}
    </C.Button>
  );
}