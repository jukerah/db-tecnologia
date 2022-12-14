import { useState, FormEvent, useContext, useEffect } from "react";
import * as C from "./styles";
import { Modal } from "../../Modal";
import { toast } from "react-toastify";

import { theme } from "../../../../styles/Theme";

import FormTitle from "../../../title/FormTitle";
import { PrimaryButton } from "../../../button/PrimaryButton";
import { Input } from "../../../TextField";
import { AuthContext } from "../../../../contexts/AuthContext";

import { setupAPIClient } from "../../../../services/api";

interface ModalUpdateUsernameProps {
  isOpened: boolean;
  toggleModal: () => void;
}

export default function ModalUpdateUsername({ isOpened, toggleModal }: ModalUpdateUsernameProps) {
  const { user } = useContext(AuthContext);

  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ username, setUsername ] = useState<string>('');

  useEffect(() => {
    if (!isOpened) clearForm();
  }, [isOpened]);

  async function handleUpdateUser(event: FormEvent) {
    event.preventDefault();

    if (username === '') {
      toast.error('Por favor, preencha o novo usuário!');
      return;
    }

    setIsLoading(true);

    const apiClient = setupAPIClient();

    await apiClient.put('/user', {
        id_user: user.id,
        username: username
    })
    .then(() => {
      clearForm();
      toggleModal();
      toast.success('Usuário salvo com sucesso!');
    })
    .catch((error) => {
      console.log(error);
      toast.error('Não foi possível salvar o novo usuário!');
    });

    setIsLoading(false);
  }

  function clearForm() {
    setUsername('');
  }

  function handleCancel() {
    clearForm();
    toggleModal();
  }
  
  return (
    <Modal
      toggleModal={toggleModal}
      isOpened={isOpened}
      isLoading={isLoading}
    >
      <C.Form onSubmit={handleUpdateUser}>
        <FormTitle>Alterar Usuário</FormTitle>

        <C.ContainerForm>
          <div className="container-input">
            <label htmlFor="username">Usuário:</label>

            <Input
              type="text"
              id="username"
              name="username"
              aria-label="Usuário"
              placeholder="Digite seu novo usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
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
              <span>Salvar</span>
            </PrimaryButton>
          </div>
        </C.ContainerForm>
      </C.Form>
    </Modal>
  )
}
