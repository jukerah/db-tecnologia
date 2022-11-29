import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import * as C from "./styles";

import { canSSRAuth } from "../../../utils/canSSRAuth";

import Header from "../../../components/Header";
import { ModalButton } from "../../../components/button/ModalButton";
import { Input } from "../../../components/TextField";
import ModalCreateProject from "../../../components/modal/ModalCreateProject";
import { theme } from "../../../styles/Theme";
import { setupAPIClient } from "../../../services/api";

interface ProjectProps {
  id: string;
  name: string;
  project_url: string;
  banner: string;
}

interface ProjectsProps {
  listProject: ProjectProps[];
}

export default function Projects({ listProject }: ProjectsProps) {
  const [ Projects, setProjects ] = useState<ProjectProps[]>(listProject);
  const [ projectId, setProjectId ] = useState<string>('');
  const [ projectName, setProjectName ] = useState<string>('');
  const [ projectUrl, setProjectUrl ] = useState<string>('');
  const [ projectBanner, setProjectBanner ] = useState<string>('');

  const [ searchProject, setSearchProject ] = useState<string>('');

  const [ isOpenedModalCreateProject, setIsOpenedModalCreateProject ] = useState<boolean>(false);
  const [ isOpenedModalUpdateProject, setIsOpenedModalUpdateProject ] = useState<boolean>(false);
  const [ isOpenedModalRemoveProject, setIsOpenedModalRemoveProject ] = useState<boolean>(false);

  async function refreshListProject() {
    const apiClient = setupAPIClient();

    const listProject = await apiClient.get('/projects');

    setProjects(listProject.data);
  }

  function toggleModalCreateProject() {
    setIsOpenedModalCreateProject(!isOpenedModalCreateProject);
  }

  function toggleModalUpdateProject({
    id,
    name,
    project_url,
    banner
  }: ProjectProps) {
    setIsOpenedModalCreateProject(!isOpenedModalCreateProject);
  }

  function handleUpdateProject({
    id,
    name,
    project_url,
    banner
  }: ProjectProps) {
    setProjectId(id);
    setProjectName(name);
    setProjectUrl(project_url);
    setProjectBanner(banner);
    toggleModalUpdateProject({ id, name, project_url, banner });
  }

  function toggleModalRemoveProject(id: string) {
    setIsOpenedModalCreateProject(!isOpenedModalCreateProject);
  }

  function handleRemoveProject(id: string) {
    setProjectId(id);
    toggleModalRemoveProject(id);
  }

  function myLoader({ src }){
    return `${process.env.BACKEND_URL}/images/${src}`;
  };

  return (
    <C.Projects>
      <Head>
        <title>DB Tecnologia - Projetos</title>
        <meta name="description" content="Projetos realizados." />
      </Head>

      <>
        <Header />

        <C.ContainerProjects>
          <h1>Projetos</h1>

          <C.ContainerHeader>
            <ModalButton
              isOpened={toggleModalCreateProject}
              backgroundColor={theme.colors.luckPoint}
              color={theme.colors.white}
            >
              Cadastrar Projeto
            </ModalButton>

            <Input
              type="text"
              aria-label="Pesquisar projeto"
              placeholder="Pesquisar Projeto..."
              value={searchProject}
              onChange={(e) => setSearchProject(e.target.value)}
              search={true}
            />
          </C.ContainerHeader>

          <C.GridProjects>
            {Projects.map(({ id, name, project_url, banner}) => name.toLowerCase().includes(searchProject.toLowerCase()) && (
              <C.Project key={id}>
                <h2>{name}</h2>

                <div className="banner">
                  <Image
                    loader={myLoader}
                    src={banner}
                    alt={`Banner do projeto ${name}`}
                    width={300}
                    height={300}
                    priority
                  />
                </div>

                <div className="container-button">
                  <ModalButton
                    isOpened={() => handleUpdateProject({
                      id,
                      name,
                      project_url,
                      banner
                    })}
                    backgroundColor={theme.colors.gold}
                    color={theme.colors.black}
                  >
                    Editar
                  </ModalButton>

                  <ModalButton
                    isOpened={() => handleRemoveProject(id)}
                    backgroundColor={theme.colors.coralRed}
                    color={theme.colors.white}
                  >
                    Deletar
                  </ModalButton>
                </div>
              </C.Project>
            ))}
          </C.GridProjects>

          <ModalCreateProject
            toggleModal={toggleModalCreateProject}
            isOpened={isOpenedModalCreateProject}
            refreshListProject={refreshListProject}
          />
        </C.ContainerProjects>
      </>
    </C.Projects>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);

  const listProject = await apiClient.get('/projects');

  return {
    props: {
      listProject: listProject.data
    }
  }
})
