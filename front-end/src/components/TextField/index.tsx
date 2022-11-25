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
  filePreview?: string;
}

export function Input({ ...rest }: InputProps) {
    return(
      <C.TextField {...rest} />
    );
}