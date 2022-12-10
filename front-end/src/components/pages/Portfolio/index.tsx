import { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import * as C from "./styles";
import { theme } from "../../../styles/Theme";

import { AiOutlinePlus } from 'react-icons/ai';
import TitlePage from "../../title/TitlePage";

interface ProjectProps {
  id: string;
  name: string;
  project_url: string;
  banner: string;
}

interface PageProps {
  listProject: ProjectProps[];
}

export default function Portfolio({ listProject }: PageProps) {
  const [ showProjects, setShowProjects ] = useState<number>(4);
  const totalProjects = listProject.length;

  function myLoader({ src }){
    return `${process.env.BACKEND_URL}/images/${src}`;
  };

  return (
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
  )
}