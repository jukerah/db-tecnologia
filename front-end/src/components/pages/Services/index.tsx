import Link from "next/link";
import * as C from "./styles";
import { theme } from "../../../styles/Theme";

import { CgWebsite } from 'react-icons/cg';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsPhone } from 'react-icons/bs';
import { IoGameController } from 'react-icons/io5';
import { GiArtificialIntelligence, GiMonoWheelRobot } from 'react-icons/gi';
import { BiSupport } from 'react-icons/bi';

import TitlePage from "../../title/TitlePage";
import TitleCard from "../../title/TitleCard";
import { PrimaryButton } from "../../button/PrimaryButton";

export default function Services() {
  return (
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
            <span>+10</span>
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
  )
}