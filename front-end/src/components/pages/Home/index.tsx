import Head from "next/head";
import Link from "next/link";
import * as C from "./styles";
import { theme } from "../../../styles/Theme";

import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';

import { PrimaryButton } from "../../button/PrimaryButton";
import TitlePitchBar from "../../title/TitlePitchBar";

export default function Home() {
  return (        
    <>
      <C.Home>
        <h1>Aqui você encontra a solução ideal para o seu negócio</h1>

        <div className="social-media">
          <Link
            aria-label="Facebook da DB Tecnologia"
            href="https://www.facebook.com/"
            target="_blank"
          >
            <BsFacebook
              size={40}
              color={theme.colors.grayLight}
            />
          </Link>
          
          <Link
            aria-label="Instagram da DB Tecnologia"
            href="https://www.instagram.com/"
            target="_blank"
          >
            <BsInstagram
              size={40}
              color={theme.colors.grayLight}
            />
          </Link>

          <Link
            aria-label="WhatSapp da DB Tecnologia"
            href="https://api.whatsapp.com/send?phone=5512988229778"
            target="_blank"
          >
            <BsWhatsapp
              size={40}
              color={theme.colors.grayLight}
            />
          </Link>
        </div>

        <PrimaryButton
          type="button"
          backgroundColor={theme.colors.cheese}
          color={theme.colors.black}
        >
          <Link href="/contato">
            Peça um orçamento
          </Link>
        </PrimaryButton>
      </C.Home>

      <C.PitchBar>
        <div className="container">
          <article className="pitchbar-item">
            <TitlePitchBar>Tecnologias<br/>Mordernas</TitlePitchBar>
            <p>A Qualidade de nossos serviços estão nas tecnologias aplicadas.</p>
          </article>

          <article className="pitchbar-item">
            <TitlePitchBar>Equipe<br/>Qualificada</TitlePitchBar>
            <p>Nossa equipe é altamente treinada e sempre atualizada para trazer o melhor.</p>
          </article>

          <article className="pitchbar-item">
            <TitlePitchBar>Atendimento<br/>Personalizado</TitlePitchBar>
            <p>DB Tecnologia traz um suporte impecável com solução imediata.</p>
          </article>
        </div>
      </C.PitchBar>
    </>
  )
}