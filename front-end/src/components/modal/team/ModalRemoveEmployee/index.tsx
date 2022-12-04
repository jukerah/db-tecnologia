import { useState, FormEvent } from "react";
import * as C from "./styles";
import { Modal } from "../../Modal";
import { toast } from "react-toastify";

import { theme } from "../../../../styles/Theme";

import { PrimaryButton } from "../../../button/PrimaryButton";

import { setupAPIClient } from "../../../../services/api";

interface ModalRemoveEmployeeProps {
  employeeId: string;
  isOpened: boolean;
  toggleModal: () => void;
  refreshListEmployee: () => void;
}

export default function ModalRemoveEmployee({
  employeeId,
  isOpened,
  toggleModal,
  refreshListEmployee
}: ModalRemoveEmployeeProps) {
  const [ isLoading, setIsLoading ] = useState<boolean>(false);

  async function handleCreateEmployee(event: FormEvent) {
    event.preventDefault();
      
    setIsLoading(true);

    const apiClient = setupAPIClient();

    await apiClient.delete('employee', {
      data: {
        id_employee: employeeId
      }
    })
    .then(() => {
      refreshListEmployee();
      toggleModal();
      toast.success('Colaborador deletado com sucesso!');
    })
    .catch(() => {
      toast.error('Erro ao deletar colaborador!');
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
      <C.Form onSubmit={handleCreateEmployee}>
        <C.ContainerForm>
          <p>Deseja deletar o colaborador?</p>

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
