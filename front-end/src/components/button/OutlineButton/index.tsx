import { ReactNode, ButtonHTMLAttributes } from 'react';
import Link from 'next/link';
import * as C from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  url: string;
}

export default function OutlineButton({ url, children }: ButtonProps) {
  return (
    <C.Button>
      <Link href={url}>
        {children}
      </Link>
    </C.Button>
  )
}
