import { InputHTMLAttributes } from 'react';
import Image from 'next/image';
import * as C from "./styles";

import { BsImage } from 'react-icons/bs';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  search?: boolean;
  filePreview?: string;
}

function myLoader({ src }){
  return `${process.env.BACKEND_URL}/images/${src}`;
};

export function Input({ search, filePreview, ...rest }: InputProps) {
  if (rest.type === 'file') {
    return(
      <C.LabelInputFile>
        {filePreview && (
          <Image
            src={filePreview}
            loader={myLoader}
            alt="Foto do produto"
            width={800}
            height={228}
          />
        )}
        
        <span>
          <BsImage color="#000000" size={24} />
          Selecione a imagem
        </span>
  
        <input
          type="file"
          {...rest}
        />
      </C.LabelInputFile>
    );
  } else {
    return(
      <C.TextField {...rest} search={search} />
    );
  }
}