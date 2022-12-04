import { useState, FormEvent, useEffect, ChangeEvent } from "react";
import * as C from "./styles";
import { Modal } from "../../Modal";
import { toast } from "react-toastify";

import { theme } from "../../../../styles/Theme";

import FormTitle from "../../../title/FormTitle";
import { PrimaryButton } from "../../../button/PrimaryButton";
import { Input } from "../../../TextField";

import { setupAPIClient } from "../../../../services/api";

interface ModalUpdateProjectProps {
  projectId: string;
  isOpened: boolean;
  toggleModal: () => void;
  refreshListProject: () => void;
}

export default function ModalUpdateEmployee({
  projectId,
  isOpened,
  toggleModal,
  refreshListProject
}: ModalUpdateProjectProps) {
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ projectName, setProjectName ] = useState<string>('');
  const [ projectUrl, setProjectUrl ] = useState<string>('url');
  const [ projectBanner, setProjectBanner ] = useState<File>(null);
  const [ projectBannerPreview, setProjectBannerPreview ] = useState<string>('');

  useEffect(() => {
    if (!isOpened) clearForm();

    if (projectId && isOpened) {
      const project = async () => {
        setIsLoading(true);
    
        const apiClient = setupAPIClient();
    
        await apiClient.get(`project/${projectId}`)
        .then((res) => {
          const { name, project_url, banner} = res.data;
    
          setProjectName(name);
          setProjectUrl(project_url);
          setProjectBannerPreview(banner);
        })
        .catch(() => {
          toast.error('Erro ao abrir projeto, tente novamente mais tarde!');
          toggleModal();
          clearForm();
        });
    
        setIsLoading(false);
      }

      project();
    }
  }, [projectId, isOpened, toggleModal]);

  function  validateForm() {
    if (projectName === '' && projectUrl === '' && projectBanner === null) {
      toast.error('Por favor, preencha todos os campos!');
      return;
    }
    if (projectName === '') {
      toast.error('Por favor, preencha o nome do projeto!');
      return;
    }
    if (projectUrl === '') {
      toast.error('Por favor, preencha a url do projeto!');
      return;
    }
    return true;
  };

  async function handleCreateProject(event: FormEvent) {
    event.preventDefault();
      if (!validateForm()) return;
      
      setIsLoading(true);

      const data = new FormData();

      data.append('id_project', projectId);
      data.append('name', projectName);
      data.append('project_url', projectUrl);
      data.append('file', projectBanner);

      const apiClient = setupAPIClient();

      await apiClient.put('project', data)
      .then(() => {
        clearForm();
        refreshListProject();
        toggleModal();
        toast.success('Projeto salvo com sucesso!');
      })
      .catch((error) => {
        toast.error('Erro ao salvar projeto!');
      });

      setIsLoading(false);
  };

  function handleProjectBanner(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    
    const banner = e.target.files[0];

    if (!banner) return;

    if (banner.type === 'image/jpg' || banner.type === 'image/jpeg' || banner.type === 'image/png') {
      setProjectBanner(banner);
      setProjectBannerPreview(URL.createObjectURL(e.target.files[0]));
      console.log(projectBanner);
    }
  };

  function clearForm() {
    setProjectName('');
    setProjectUrl('');
    setProjectBanner(null);
    setProjectBannerPreview('');
  };

  function handleCancel() {
    clearForm()
    toggleModal();
  };
  
  return (
    <Modal
      toggleModal={toggleModal}
      isOpened={isOpened}
      isLoading={isLoading}
    >
      <C.Form onSubmit={handleCreateProject}>
        <FormTitle>Editar Projeto</FormTitle>

        <C.ContainerForm>
          <div className="container-input">
            <label htmlFor="name">Nome do Projeto:</label>

            <Input
              type="text"
              id="name"
              name="name"
              aria-label="E-mail"
              placeholder="Digite o nome do projeto"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </div>

          <div className="container-input">
            <label htmlFor="url">Url do projeto:</label>

            <Input
              type="text"
              id="url"
              name="url"
              aria-label="Url do projeto"
              placeholder="Digite a url do projeto"
              value={projectUrl}
              onChange={(e) => setProjectUrl(e.target.value)}
            />
          </div>

          <div className="container-input">
            <label htmlFor="banner">Banner do projeto:</label>

            <Input
              borderRadius={false}
              type="file"
              id="banner"
              name="banner"
              aria-label="Banner do projeto"
              accept=".jpg,.jpge,.png"
              filePreview={projectBannerPreview}
              onChange={handleProjectBanner}
            />
          </div>

          <div className="container-button">
            <PrimaryButton
              type="button"
              onClick={handleCancel}
              backgroundColor={theme.colors.coralRed}
              color={theme.colors.white}
            >
              Cancelar
            </PrimaryButton>
            <PrimaryButton
              type="submit"
              backgroundColor={theme.colors.aquamarine}
              color={theme.colors.black}
            >
              Salvar
            </PrimaryButton>
          </div>
        </C.ContainerForm>
      </C.Form>
    </Modal>
  )
}
