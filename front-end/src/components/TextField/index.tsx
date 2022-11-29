import { InputHTMLAttributes } from 'react';
import * as C from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  filePreview?: string;
  search?: boolean;
}

export function Input({ search, ...rest }: InputProps) {
    return(
      <C.TextField {...rest} search={search} />
    );
}