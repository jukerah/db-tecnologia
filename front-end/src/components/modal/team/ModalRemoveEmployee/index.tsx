import { useState, FormEvent } from "react";
import * as C from "./styles";
import { Modal } from "../../Modal";
import { toast } from "react-toastify";

import { theme } from "../../../../styles/Theme";

import { PrimaryButton } from "../../../button/PrimaryButton";

import { setupAPIClient } from "../../../../services/api";

interface ModalRemoveProjectProps {
  projectId: string;
  isOpened: boolean;
  toggleModal: () => void;
  refreshListProject: () => void;
}

export default function ModalRemoveEmployee({
  projectId,
  isOpened,
  toggleModal,
  refreshListProject
}: ModalRemoveProjectProps) {
  const [ isLoading, setIsLoading ] = useState<boolean>(false);

  async function handleCreateProject(event: FormEvent) {
    event.preventDefault();
      
    setIsLoading(true);

    const apiClient = setupAPIClient();

    await apiClient.delete('project', {
      data: {
        id_project: projectId
      }
    })
    .then(() => {
      refreshListProject();
      toggleModal();
      toast.success('Projeto deletado com sucesso!');
    })
    .catch(() => {
      toast.error('Erro ao deletar projeto!');
    });

    setIsLoading(false);
  };

  const handleCancel = () => toggleModal();
  
  return (
    <Modal
      toggleModal={toggleModal}
      isOpened={isOpened}
      isLoading={isLoading}
    >
      <C.Form onSubmit={handleCreateProject}>
        <C.ContainerForm>
          <p>Deseja deletar o projeto?</p>

          <div className="container-button">
            <PrimaryButton
              type="button"
              onClick={handleCancel}
              backgroundColor={theme.colors.coralRed}
              color={theme.colors.white}
            >
              Não
            </PrimaryButton>
            <PrimaryButton
              type="submit"
              backgroundColor={theme.colors.aquamarine}
              color={theme.colors.black}
            >
              Sim
            </PrimaryButton>
          </div>
        </C.ContainerForm>
      </C.Form>
    </Modal>
  )
}
