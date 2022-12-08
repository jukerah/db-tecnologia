import { useState, FormEvent } from 'react';
import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';
import * as C from "../styles/index";
import { theme } from "../styles/Theme";
import { toast } from 'react-toastify';

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
import { FiMail } from 'react-icons/fi';
import { FiSend } from 'react-icons/fi';

import { setupAPIClient } from "../services/api";

import Header from "../components/Header";
import { PrimaryButton } from "../components/button/PrimaryButton";
import TitlePitchBar from "../components/title/TitlePitchBar";
import TitlePage from "../components/title/TitlePage";
import TitleCard from "../components/title/TitleCard";
import { Input, TextArea } from '../components/TextField';

interface ProjectProps {
  id: string;
  name: string;
  project_url: string;
  banner: string;
}

interface EmployeeProps {
  id: string;
  name: string;
  linkedin: string;
  photo: string;
}

interface PageProps {
  listEmployee: EmployeeProps[];
  listProject: ProjectProps[];
}

export default function Index({ listProject, listEmployee }: PageProps) {
  const [ showProjects, setShowProjects ] = useState<number>(4);
  const totalProjects = listProject.length;

  const [ contactName, setContactName ] = useState<string>("");
  const [ alertContactName, setAlertContactName ] = useState<boolean>(false);
  const [ contactMessage, setContactMessage ] = useState<string>("");
  const [ alertContactMessage, setAlertContactMessage ] = useState<boolean>(false);

  const phone = "+55 12 98822-9778";
  const email = "exemplo@exemplo.com";

  function myLoader({ src }){
    return `${process.env.BACKEND_URL}/images/${src}`;
  };

  function validatedContactForm() {
    if (contactName === "" && contactMessage === "") {
      setAlertContactName(true);
      setAlertContactMessage(true);
      toast.error('Por favor, preencha o campos nome e mensagem!');
      return false;
    }
    if (contactName === "") {
      setAlertContactName(true);
      toast.error('Por favor, preencha o campo nome!');
      return false;
    }
    if (contactMessage === "") {
      setAlertContactMessage(true);
      toast.error('Por favor, preencha o campo mensagem!');
      return false;
    }
    return true;
  };

  function handleClickContactForm(event: FormEvent) {
    event.preventDefault();

    if (!validatedContactForm()) return;

    const convertedPhone = phone
      .replaceAll("+", "")
      .replaceAll(" ", "")
      .replaceAll("-", "");

    const convertedMessage = encodeURIComponent(`Olá meu nome é ${contactName}, ${contactMessage}`);

    setContactName('');
    setContactMessage('');
    window.open(`https://api.whatsapp.com/send?phone=${convertedPhone}&text=${convertedMessage}`, '_blank');
  }

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
                Iniciar Conversa
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

          <C.Services id="servicos">
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
                color={theme.colors.black}
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

          <C.AboutUs id="quem-somos">
            <div className="container">
              <TitlePage>Quem Somos</TitlePage>

              <p className="about-company">Somos empresa especializada na implementação de soluções de alta qualidade e tecnologia em gestão empresarial, proporcionando diferencial competitivo para nossos clientes por meio do gerenciamento integrado e de acordo com as necessidades de cada organização. Atendemos nossos clientes com soluções Senior e complementares verticalizadas, integrando e gerando informações precisas e confiáveis para a gestão das organizações.</p>

              <div className="team">
                <div className="ceo">
                  <Link
                    aria-label={"Linkedin do colaborador ceo"}
                    href="https://www.linkedin.com/in/deivid-bastos-b0366786"
                    target="_blank"
                  >
                    <Image
                      src={"/ceo.png"}
                      alt={"Foto do ceo da empresa."}
                      width={250}
                      height={250}
                    />
                  </Link>

                  <p className="about-ceo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                </div>

                <div className="list-employee">
                  {listEmployee.map(({id, name, linkedin, photo}: EmployeeProps) => (
                    <Link
                      aria-label={`Linkedin do colaborador ${name}`}
                      key={id}
                      href={linkedin}
                      target="_blank"
                      className="employee"
                    >
                      <Image
                        loader={myLoader}
                        src={photo}
                        alt={`Foto do colaborador ${name}`}
                        width={100}
                        height={100}
                        priority
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </C.AboutUs>

          <C.Contact id="contato">
            <div className="container">
              <TitlePage>Fale com a gente</TitlePage>

              <div className="contact">
                <div className="container-info">
                  <p className="description">Entre em contato através do formulário ou através de um de nossos contatos. Responderemos o mais rápido possível.</p>

                  <div className="commercial-service">
                    <h2>Atendimento Comercial</h2>
                    <p>Segunda a Sexta – 09:00 às 18:00</p>
                    <p>Sábado – 09:00 às 13:00</p>
                  </div>

                  <div className="contact-details">
                    <Link
                      href={`tel:${phone}`}
                      target="_blank"
                      className="detail-item"
                    >
                      <BsWhatsapp
                        size={24}
                        color={theme.colors.black}
                      />
                      {phone}
                    </Link>

                    <Link
                      href={`mailto:${email}`}
                      target="_blank"
                      className="detail-item"
                    >
                      <FiMail
                        size={24}
                        color={theme.colors.black}
                      />
                      {email}
                    </Link>
                  </div>
                </div>

                <form
                  onSubmit={handleClickContactForm} 
                  className="contact-form"
                >
                  <div className="container-input">
                    <label htmlFor="contact-name">Nome:</label>

                    <Input
                      type="text"
                      id="contact-name"
                      name="contact-name"
                      aria-label="Nome"
                      placeholder="Digite o seu nome"
                      value={contactName}
                      onChange={(e) => {
                        setAlertContactName(false);
                        setContactName(e.target.value)
                      }}
                      alert={alertContactName}
                    />

                    {alertContactName &&
                      <p className="alert">
                        Por favor, digite o seu nome!
                      </p>
                    }

                  </div>

                  <div className="container-input">
                    <label htmlFor="contact-name">Mensagem:</label>

                    <TextArea
                      id="contact-message"
                      name="contact-message"
                      aria-label="Mensagem"
                      placeholder="Digite o sua mensagem"
                      value={contactMessage}
                      onChange={(e) => {
                        setAlertContactMessage(false);
                        setContactMessage(e.target.value)
                      }}
                      alert={alertContactMessage}
                    />

                    {alertContactMessage &&
                      <p className="alert">
                        Por favor, digite o sua mensagem!
                      </p>
                    }
                  </div>

                  <PrimaryButton
                    type="submit"
                    backgroundColor={theme.colors.luckPoint}
                    color={theme.colors.white}
                  >
                    <span>
                      Iniciar Conversa
                      <FiSend
                      size={24}
                      color={theme.colors.white}
                    />
                    </span>
                  </PrimaryButton>
                </form>
              </div>
            </div>
          </C.Contact>
        </C.Pages>
      </C.Container>
    </C.Index>
  )
}

export const getServerSideProps = async () => {
  const apiClient = setupAPIClient();

  const listProject = await apiClient.get('/projects');
  const listEmployee = await apiClient.get('/employees');

  return {
    props: {
      listProject: listProject.data,
      listEmployee: listEmployee.data
    }
  }
}