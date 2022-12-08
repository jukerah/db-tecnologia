import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import Image from 'next/image';
import * as C from "./styles";

import { BsImage } from 'react-icons/bs';
import { BiPlus } from 'react-icons/bi';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  search?: boolean;
  borderRadius?: boolean;
  filePreview?: string;
  alert?: boolean;
}

function myLoader({ src }){
  return `${process.env.BACKEND_URL}/images/${src}`;
};

export function Input({
  search,
  filePreview,
  borderRadius,
  alert,
  ...rest
}: InputProps) {
  if (rest.type === 'file') {
    return(
      <C.LabelInputFile borderRadius={borderRadius}>
        {filePreview && (
          <Image
            src={filePreview}
            loader={myLoader}
            alt="Foto do produto"
            width={800}
            height={228}
          />
        )}
        
        {borderRadius
          ?
            <span>
              <BiPlus color="#000000" size={48} />
            </span>
          :
            <span>
              <BsImage color="#000000" size={24} />
              Selecione a imagem
            </span>
        }
  
        <input
          type="file"
          {...rest}
        />
      </C.LabelInputFile>
    );
  } else {
    return(
      <C.TextField
        alert={alert} {...rest}
        search={search}
      />
    );
  }
}

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
  alert?: boolean;
}

export function TextArea({ alert, ...rest }: TextAreaProps) {
  return(
    <C.TextArea
      alert={alert}
      {...rest}
    ></C.TextArea>
  );
}