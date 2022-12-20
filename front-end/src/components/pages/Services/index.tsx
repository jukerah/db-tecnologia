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

              <Link href="/#contato">
                {/* <AiOutlinePlus
                  size={20}
                  color={theme.colors.black}
                /> */}

                Peça um orçamento
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

              <Link href="/#contato">
                {/* <AiOutlinePlus
                  size={20}
                  color={theme.colors.black}
                /> */}

                Peça um orçamento
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
              <p>Temos experiência em todos os mecanismos populares de desenvolvimento de jogos para dispositivos moveis ou desktops com recursos em 2D, isométricos e 3D. Prezamos pela experiência de jogo perfeito, garantimos que ele funcione mesmo após o lançamento,  com foco para serem divertidos de jogar e viciantes.</p>

              <Link href="/#contato">
                {/* <AiOutlinePlus
                  size={20}
                  color={theme.colors.black}
                /> */}

                Peça um orçamento
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
              <p>Automatizamos suas atividades e impulsionamos suas forças de trabalho com otimização de processos e geração de receita. Os serviços de inteligência artificial se integram a suas aplicações e lidam da melhor forma possível de acordo com suas necessidades.</p>

              <Link href="/#contato">
                {/* <AiOutlinePlus
                  size={20}
                  color={theme.colors.black}
                /> */}

                Peça um orçamento
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
              <p>Um Bot executa tarefas automatizadas, repetitivas e pré-definidas que imitam ou substituem o comportamento do usuário humano. Muito utilizado em chats, pesquisas de mercado, redução de custos, identificar oportunidade de negócios ou impulsionar a qualificação de leads.</p>

              <Link href="/#contato">
                {/* <AiOutlinePlus
                  size={20}
                  color={theme.colors.black}
                /> */}

                Peça um orçamento
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
              <p>Somos especialistas em suporte de TI, afinal, com um bom suporte irá auxiliar na eliminação, esclarecimento e resolução de erros. Assim, as reclamações de clientes podem ser reduzidas gradativamente, o que, por sua vez, impacta positivamente nos níveis de satisfação por parte do cliente.</p>

              <Link href="/#contato">
                {/* <AiOutlinePlus
                  size={20}
                  color={theme.colors.black}
                /> */}

                Peça um orçamento
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