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

interface ModalCreateProjectProps {
  isOpened: boolean;
  toggleModal: () => void;
}

export default function ModalCreateProject({ isOpened, toggleModal }: ModalCreateProjectProps) {
  const { user } = useContext(AuthContext);

  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ email, setEmail ] = useState<string>('');

  useEffect(() => {
    if (!isOpened) setEmail('');
  }, [isOpened]);

  async function handleUpdateEmail(event: FormEvent) {
    event.preventDefault();

    if (email === '') {
      toast.error('Por favor, preencha o novo e-mail!');
      return;
    }

    setIsLoading(true);

    const apiClient = setupAPIClient();

    await apiClient.put('/user', {
        id_user: user.id,
        email: email
    })
    .then(() => {
      setEmail('');
      toggleModal();
      toast.success('E-mail salvo com sucesso!');
    })
    .catch((error) => {
      console.log(error);
      toast.error('Não foi possível salvar o novo e-mail!');
    });

    setIsLoading(false);
  }

  function handleCancel() {
    setEmail('');
    toggleModal();
  }
  
  return (
    <Modal
      toggleModal={toggleModal}
      isOpened={isOpened}
      isLoading={isLoading}
    >
      <C.Form onSubmit={handleUpdateEmail}>
        <FormTitle>Cadastrar Projeto</FormTitle>

        <C.ContainerForm>
          <div className="container-input">
            <label htmlFor="email">E-mail:</label>

            <Input
              type="email"
              id="email"
              name="email"
              aria-label="E-mail"
              placeholder="Digite seu novo e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
