import { useState, useEffect } from 'react';
import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';
import * as C from "../styles/index";
import { theme } from "../styles/Theme";

import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsPhone } from 'react-icons/bs';
import { IoGameController } from 'react-icons/io5';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { GiMonoWheelRobot } from 'react-icons/gi';
import { BiSupport } from 'react-icons/bi';

import Header from "../components/Header";
import { PrimaryButton } from "../components/button/PrimaryButton";
import TitlePitchBar from "../components/title/TitlePitchBar";
import TitlePage from "../components/title/TitlePage";
import TitleCard from "../components/title/TitleCard";
import { setupAPIClient } from "../services/api";

interface ProjectProps {
  id: string;
  name: string;
  project_url: string;
  banner: string;
}

interface ProjectsProps {
  listProject: ProjectProps[];
}

export default function Index({ listProject }: ProjectsProps) {
  const [ showProjects, setShowProjects ] = useState<number>(4);

  const totalProjects = listProject.length;

  function myLoader({ src }){
    return `${process.env.BACKEND_URL}/images/${src}`;
  };

  return (
    <C.Index>
      <Head>
        <title>DB Tecnologia</title>
        <meta name="description" content="Aqui você encontra a solução ideal para o seu negócio!" />
      </Head>

      <C.Container>
        <Header />
        
        <C.Pages>
          <C.Home>
            <h1>Aqui você encontra a solução ideal para o seu negócio</h1>

            <div className={"social-media"}>
              <Link
                aria-label="Facebook da DB Tecnologia"
                href="https://www.facebook.com/"
                target="_blank"
              >
                <BsFacebook
                  size={40}
                  color="#CCCCCC"
                />
              </Link>
              
              <Link
                aria-label="Instagram da DB Tecnologia"
                href="https://www.instagram.com/"
                target="_blank"
              >
                <BsInstagram
                  size={40}
                  color="#CCCCCC"
                />
              </Link>

              <Link
                aria-label="WhatSapp da DB Tecnologia"
                href="https://api.whatsapp.com/send?phone=5512988229778"
                target="_blank"
              >
                <BsWhatsapp
                  size={40}
                  color="#CCCCCC"
                />
              </Link>
            </div>

            <PrimaryButton
              type="button"
              backgroundColor={theme.colors.cheese}
              color="black"
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

          <C.Services id="services">
            <div className="container">
              <TitlePage><span>Conheça os nossos</span> principais produtos e serviços</TitlePage>

              <div className="list-service">
                <div className="card">
                  <div className="card-header">
                    <CgWebsite
                      size={40}
                      color={theme.colors.black}
                    />

                    <TitleCard>Criação de Sites Profissionais</TitleCard>
                  </div>

                  <div className="card-info">
                    <p>Criação de  Sites, Blogs, Landing Pages, Lojas Virtuais, eCommerces com alta performance utilizando os padrões e tecnologias mais mordernas do mercado. Todos os projetos são únicos com foco para gerar mais resultados e conversões de vendas.</p>

                    <Link href="/">
                      <AiOutlinePlus
                        size={20}
                        color={theme.colors.black}
                      />

                      Mais detalhes
                    </Link>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <BsPhone
                      size={40}
                      color={theme.colors.black}
                    />

                    <TitleCard>Criação de Aplicativos</TitleCard>
                  </div>

                  <div className="card-info">
                    <p>Criação de aplicativos para Android e IOS para Startups, empresas de médio e grande porte. Planejamento estrutural, desenvolvimento por etapas, suporte técnico e implementação de novas funcionalidades.</p>

                    <Link href="/">
                      <AiOutlinePlus
                        size={20}
                        color={theme.colors.black}
                      />

                      Mais detalhes
                    </Link>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <IoGameController
                      size={40}
                      color={theme.colors.black}
                    />

                    <TitleCard>Criação de Jogos</TitleCard>
                  </div>

                  <div className="card-info">
                    <p>Criamos jogos com visual 3D ou em pixel arte. Prezamos pela alta qualidade em performance, suporte para melhorias e implementação de novas funcionalidades.</p>

                    <Link href="/">
                      <AiOutlinePlus
                        size={20}
                        color={theme.colors.black}
                      />

                      Mais detalhes
                    </Link>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <GiArtificialIntelligence
                      size={40}
                      color={theme.colors.black}
                    />

                    <TitleCard>IA - Inteligência Artificial</TitleCard>
                  </div>

                  <div className="card-info">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                    <Link href="/">
                      <AiOutlinePlus
                        size={20}
                        color={theme.colors.black}
                      />

                      Mais detalhes
                    </Link>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <GiMonoWheelRobot
                      size={40}
                      color={theme.colors.black}
                    />

                    <TitleCard>Criação de Bots</TitleCard>
                  </div>

                  <div className="card-info">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                    <Link href="/">
                      <AiOutlinePlus
                        size={20}
                        color={theme.colors.black}
                      />

                      Mais detalhes
                    </Link>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <BiSupport
                      size={40}
                      color={theme.colors.black}
                    />

                    <TitleCard>Suporte Especilizado</TitleCard>
                  </div>

                  <div className="card-info">
                    <p>Prestamos suporte para clientes e terceiros, realizando melhorias em sites, aplicativos, jogos e etc.</p>

                    <Link href="/">
                      <AiOutlinePlus
                        size={20}
                        color={theme.colors.black}
                      />

                      Mais detalhes
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pitchbar">
              <div className="pitchbar-info">
                <p>
                  <span>+250</span>
                  <br/>
                  Clientes Atendidos
                </p>
                <p>
                  <span>+200</span>
                  <br/>
                  Projetos Entregues
                </p>
                <p>
                  <span>10</span>
                  <br/>
                  Anos de Experiência</p>
                <p>
                  <span>Equipe</span>
                  <br/>
                  100% Qualificada
                </p>
              </div>

              <PrimaryButton
                type="button"
                backgroundColor={theme.colors.aquamarine}
                color="black"
              >
                <Link href="/contato">
                  Peça um orçamento
                </Link>
              </PrimaryButton>
            </div>
          </C.Services>

          <C.Portfolio id="portfolio">
            <div className="container">
              <div className="header">
                <TitlePage>Nosso Portfólio</TitlePage>
                
                <p>Confira alguns dos websites desenvolvidos recentemente por nós!</p>
                
                <h2>Queremos você aqui também!</h2>
              </div>

              <div className="container-project">
                <div className="list-project">
                  {listProject.map(({ id, name, project_url, banner}: ProjectProps, index: number) => 
                  (index <= showProjects - 1) && (
                    <Link
                      aria-label={`Banner do projeto ${name}`}
                      key={id}
                      href={project_url}
                      target="_blank"
                      className="card"
                    >
                      <Image
                        loader={myLoader}
                        src={banner}
                        alt={`Banner do projeto ${name}`}
                        width={400}
                        height={225}
                        priority
                      />
                      <span>Ver o projeto</span>
                    </Link>
                  ))}
                </div>

                {(totalProjects > 4 && showProjects < totalProjects) &&
                  <button
                    onClick={() => {
                      showProjects <= totalProjects - 4
                      ? setShowProjects(showProjects + 4)
                      : setShowProjects(totalProjects)
                    }}
                  >
                    <AiOutlinePlus
                      size={20}
                      color={theme.colors.luckPoint}
                    />

                    Ver mais projetos
                  </button>
                }
              </div>
            </div>
            
          </C.Portfolio>
        </C.Pages>
      </C.Container>
    </C.Index>
  )
}

export const getServerSideProps = async () => {
  const apiClient = setupAPIClient();

  const listProject = await apiClient.get('/projects');

  return {
    props: {
      listProject: listProject.data
    }
  }
}