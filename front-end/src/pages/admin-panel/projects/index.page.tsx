import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import * as C from "./styles";
import { theme } from "../../../styles/Theme";

import { canSSRAuth } from "../../../utils/canSSRAuth";

import Header from "../../../components/Header";
import { ModalButton } from "../../../components/button/ModalButton";
import { Input } from "../../../components/TextField";
import ModalCreateProject from "../../../components/modal/project/ModalCreateProject";
import { setupAPIClient } from "../../../services/api";
import ModalUpdateProject from "../../../components/modal/project/ModalUpdateProject";
import ModalRemoveProject from "../../../components/modal/project/ModalRemoveProject";
import Loading from "../../../components/Loading";

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
  const [ isLoading, setIsLoading ] = useState<boolean>(false);

  const [ Projects, setProjects ] = useState<ProjectProps[]>(listProject);
  const [ projectId, setProjectId ] = useState<string>('');

  const [ searchProject, setSearchProject ] = useState<string>('');

  const [ isOpenedModalCreateProject, setIsOpenedModalCreateProject ] = useState<boolean>(false);
  const [ isOpenedModalUpdateProject, setIsOpenedModalUpdateProject ] = useState<boolean>(false);
  const [ isOpenedModalRemoveProject, setIsOpenedModalRemoveProject ] = useState<boolean>(false);

  async function refreshListProject() {
    setIsLoading(true);

    const apiClient = setupAPIClient();

    const listProject = await apiClient.get('/projects');

    setProjects(listProject.data);
    setIsLoading(false);
    
  }

  function toggleModalCreateProject() {
    setIsOpenedModalCreateProject(!isOpenedModalCreateProject);
  }

  function toggleModalUpdateProject() {
    setIsOpenedModalUpdateProject(!isOpenedModalUpdateProject);
  }

  function handleUpdateProject(projectId: string) {
    setProjectId(projectId);
    toggleModalUpdateProject();
  }

  function toggleModalRemoveProject() {
    setIsOpenedModalRemoveProject(!isOpenedModalRemoveProject);
  }

  function handleRemoveProject(projectId) {
    setProjectId(projectId);
    toggleModalRemoveProject();
  }

  function myLoader({ src }){
    return `https://db-tecnologia-images.s3.amazonaws.com/${src}`;
  };

  return (
    <>
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
              {Projects.map(({ id, name, banner}) => name.toLowerCase().includes(searchProject.toLowerCase()) && (
                <C.Project key={id}>
                  <h2>{name}</h2>

                  <div className="banner">
                    <Image
                      loader={myLoader}
                      src={banner}
                      alt={`Banner do projeto ${name}`}
                      width={300}
                      height={300}
                    />
                  </div>

                  <div className="container-button">
                    <ModalButton
                      isOpened={() => handleUpdateProject(id)}
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
            <ModalUpdateProject
              toggleModal={toggleModalUpdateProject}
              isOpened={isOpenedModalUpdateProject}
              refreshListProject={refreshListProject}
              projectId={projectId}
            />
            <ModalRemoveProject
              toggleModal={toggleModalRemoveProject}
              isOpened={isOpenedModalRemoveProject}
              refreshListProject={refreshListProject}
              projectId={projectId}
            />
          </C.ContainerProjects>
        </>
      </C.Projects>

      {isLoading && <Loading />}
    </>
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
