import { ReactNode } from 'react';
import * as C from "./styles";

interface TitleProps {
  children: ReactNode;
}

export default function TitleCard({ children }: TitleProps) {
  return (
    <C.Title>{children}</C.Title>
  )
}