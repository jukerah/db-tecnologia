import {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  SelectHTMLAttributes,
  ReactNode
} from 'react';
import * as C from "./styles";

import { BsImage } from 'react-icons/bs';
import Image from 'next/image';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  text?: string;
  filePreview?: string;
}

export function Input({ text, ...rest }: InputProps) {
    return(
      <C.TextField {...rest} />
    );
}