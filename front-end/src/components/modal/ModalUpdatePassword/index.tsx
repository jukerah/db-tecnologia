import { useState, FormEvent, useContext, useEffect } from "react";
import * as C from "./styles";
import { Modal } from "../Modal";
import { toast } from "react-toastify";

import { theme } from "../../../styles/Theme";

import FormTitle from "../../title/FormTitle";
import { PrimaryButton } from "../../button/PrimaryButton";
import { Input } from "../../TextField";
import { AuthContext } from "../../../contexts/AuthContext";

import { setupAPIClient } from "../../../services/api";

interface ModalUpdatePasswordProps {
  isOpened: boolean;
  toggleModal: () => void;
}

export default function ModalUpdatePassword({ isOpened, toggleModal }: ModalUpdatePasswordProps) {
  const { user } = useContext(AuthContext);

  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ password, setPassword ] = useState<string>('');
  const [ passwordAux, setPasswordAux ] = useState<string>('');

  useEffect(() => {
    if (!isOpened) {
      clearForm();
    }
  }, [isOpened]);

  async function handleUpdatePassword(event: FormEvent) {
    event.preventDefault();

    if (password === '') {
      toast.error('Por favor, preencha o campo nova senha!');
      return;
    }

    if (passwordAux === '') {
      toast.error('Por favor, preencha o campo repetir nova senha!');
      return;
    }

    if (password !== passwordAux) {
      toast.error('Senhas estão divergentes!');
      return;
    }

    setIsLoading(true);

    const apiClient = setupAPIClient();

    await apiClient.put('/user', {
        id_user: user.id,
        password: password
    })
    .then(() => {
      clearForm();
      toggleModal();
      toast.success('Senha salva com sucesso!');
    })
    .catch((error) => {
      console.log(error);
      toast.error('Não foi possível salvar a nova senha!');
    });

    setIsLoading(false);
  }

  function clearForm() {
    setPassword('');
    setPasswordAux('');
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
      <C.Form onSubmit={handleUpdatePassword}>
        <FormTitle>Alterar Senha</FormTitle>

        <C.ContainerForm>
          <div className="container-input">
            <label htmlFor="username">Nova senha:</label>

            <Input
              type="password"
              id="username"
              name="username"
              aria-label="Usuário"
              placeholder="Digite seu novo usuário"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="container-input">
            <label htmlFor="username">Repetir nova senha:</label>

            <Input
              type="password"
              id="username"
              name="username"
              aria-label="Usuário"
              placeholder="Digite seu novo usuário"
              value={passwordAux}
              onChange={(e) => setPasswordAux(e.target.value)}
              required
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
