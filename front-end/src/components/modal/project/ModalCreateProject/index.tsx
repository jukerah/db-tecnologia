import { useState, FormEvent, useEffect, ChangeEvent } from "react";
import * as C from "./styles";
import { Modal } from "../../Modal";
import { toast } from "react-toastify";

import { theme } from "../../../../styles/Theme";

import FormTitle from "../../../title/FormTitle";
import { PrimaryButton } from "../../../button/PrimaryButton";
import { Input } from "../../../TextField";

import { setupAPIClient } from "../../../../services/api";

interface ModalCreateProjectProps {
  isOpened: boolean;
  toggleModal: () => void;
  refreshListProject: () => void;
}

export default function ModalCreateProject({ isOpened, toggleModal, refreshListProject }: ModalCreateProjectProps) {
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ projectName, setProjectName ] = useState<string>('');
  const [ projectUrl, setProjectUrl ] = useState<string>('');
  const [ projectBanner, setProjectBanner ] = useState<File>(null);
  const [ projectBannerPreview, setProjectBannerPreview ] = useState<string>('');

  useEffect(() => {
    if (!isOpened) clearForm();
  }, [isOpened]);

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
    if (projectBanner === null) {
      toast.error('Por favor, selecione o banner do projeto!');
      return;
    }
    return true;
  }

  async function handleCreateProject(event: FormEvent) {
    event.preventDefault();
 
      const data = new FormData();

      if (!validateForm()) return

      data.append('name', projectName);
      data.append('project_url', projectUrl);
      data.append('file', projectBanner);

      setIsLoading(true);

      const apiClient = setupAPIClient();

      await apiClient.post('project', data)
      .then(() => {
        clearForm();
        refreshListProject();
        toggleModal();
        toast.success('Projeto cadastrado sucesso!');
      })
      .catch(() => {
        toast.error('Erro ao cadastrar projeto!');
      });

      setIsLoading(false);
  }

  function handleProjectBanner(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    
    const banner = e.target.files[0];

    if (!banner) return;

    if (banner.size > 200000) {
      toast.error('Tamanho da imagem deve possuir no máximo 2 MB!');
      return;
    }

    if (banner.type === 'image/jpg' || banner.type === 'image/jpeg' || banner.type === 'image/png') {
      setProjectBanner(banner);
      setProjectBannerPreview(URL.createObjectURL(e.target.files[0]));
    }
  }

  function clearForm() {
    setProjectName('');
    setProjectUrl('');
    setProjectBanner(null);
    setProjectBannerPreview('');
  }

  function handleCancel() {
    clearForm()
    toggleModal();
  }
  
  return (
    <Modal
      toggleModal={toggleModal}
      isOpened={isOpened}
      isLoading={isLoading}
    >
      <C.Form onSubmit={handleCreateProject}>
        <FormTitle>Cadastrar Projeto</FormTitle>

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
              type="file"
              id="banner"
              name="banner"
              aria-label="Banner do projeto"
              accept=".jpg,.jpge,.png"
              filePreview={projectBannerPreview}
              onChange={handleProjectBanner}
            />

            <p>400 x 300px e máximo 2 MB</p>
          </div>

          <div className="container-button">
            <PrimaryButton
              type="button"
              onClick={handleCancel}
              backgroundColor={theme.colors.coralRed}
              color={theme.colors.white}
            >
              <span>Cancelar</span>
            </PrimaryButton>
            <PrimaryButton
              type="submit"
              backgroundColor={theme.colors.aquamarine}
              color={theme.colors.black}
            >
              <span>Cadastrar</span>
            </PrimaryButton>
          </div>
        </C.ContainerForm>
      </C.Form>
    </Modal>
  )
}
