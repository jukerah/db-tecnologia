import { useState, FormEvent, useEffect, ChangeEvent } from "react";
import * as C from "./styles";
import { Modal } from "../../Modal";
import { toast } from "react-toastify";

import { theme } from "../../../../styles/Theme";

import FormTitle from "../../../title/FormTitle";
import { PrimaryButton } from "../../../button/PrimaryButton";
import { Input } from "../../../TextField";

import { setupAPIClient } from "../../../../services/api";

interface ModalCreateEmployeeProps {
  isOpened: boolean;
  toggleModal: () => void;
  refreshListEmployee: () => void;
}

export default function ModalCreateEmployee({
  isOpened,
  toggleModal,
  refreshListEmployee
}: ModalCreateEmployeeProps) {
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ employeeName, setEmployeeName ] = useState<string>('');
  const [ employeeLinkedin, setEmployeeLinkedin ] = useState<string>('');
  const [ employeePhoto, setEmployeePhoto ] = useState<File>(null);
  const [ employeePhotoPreview, setEmployeePhotoPreview ] = useState<string>('');

  useEffect(() => {
    if (!isOpened) clearForm();
  }, [isOpened]);

  function  validateForm() {
    if (employeeName === '' && employeeLinkedin === '' && employeePhoto === null) {
      toast.error('Por favor, preencha todos os campos!');
      return;
    }
    if (employeeName === '') {
      toast.error('Por favor, preencha o nome do colaborador!');
      return;
    }
    if (employeeLinkedin === '') {
      toast.error('Por favor, preencha o linkedin do colaborador!');
      return;
    }
    if (employeePhoto === null) {
      toast.error('Por favor, selecione a foto do colaborador!');
      return;
    }
    return true;
  }

  async function handleCreateEmployee(event: FormEvent) {
    event.preventDefault();
 
      const data = new FormData();

      if (!validateForm()) return

      data.append('name', employeeName);
      data.append('linkedin', employeeLinkedin);
      data.append('file', employeePhoto);

      setIsLoading(true);

      const apiClient = setupAPIClient();

      await apiClient.post('employee', data)
      .then(() => {
        clearForm();
        refreshListEmployee();
        toggleModal();
        toast.success('Colaborador cadastrado sucesso!');
      })
      .catch(() => {
        toast.error('Erro ao cadastrar colaborador!');
      });

      setIsLoading(false);
  }

  function handleEmployeePhoto(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    
    const photo = e.target.files[0];

    if (!photo) return;

    if (photo.size > 100000) {
      toast.error('Tamanho da foto deve possuir no máximo 1 MB!');
      return;
    }

    if (photo.type === 'image/jpg' || photo.type === 'image/jpeg' || photo.type === 'image/png') {
      setEmployeePhoto(photo);
      setEmployeePhotoPreview(URL.createObjectURL(e.target.files[0]));
    }
  }

  function clearForm() {
    setEmployeeName('');
    setEmployeeLinkedin('');
    setEmployeePhoto(null);
    setEmployeePhotoPreview('');
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
      <C.Form onSubmit={handleCreateEmployee}>
        <FormTitle>Cadastrar Colaborador</FormTitle>

        <C.ContainerForm>
          <div className="container-input">
            <div className="container-left">
              <div className="input">
                <label htmlFor="name">Nome:</label>

                <Input
                  type="text"
                  id="name"
                  name="name"
                  aria-label="E-mail"
                  placeholder="Digite o nome do projeto"
                  value={employeeName}
                  onChange={(e) => setEmployeeName(e.target.value)}
                />
              </div>

              <div className="input">
                <label htmlFor="url">Linkedin:</label>

                <Input
                  type="text"
                  id="url"
                  name="url"
                  aria-label="Url do projeto"
                  placeholder="Digite a url do projeto"
                  value={employeeLinkedin}
                  onChange={(e) => setEmployeeLinkedin(e.target.value)}
                />
              </div>
            </div>

            <div className="input photo">
              <label htmlFor="photo">Foto:</label>

              <Input
                borderRadius={true}
                type="file"
                id="photo"
                name="photo"
                aria-label="Foto do colaborador"
                accept=".jpg,.jpge,.png"
                filePreview={employeePhotoPreview}
                onChange={handleEmployeePhoto}
              />

              <p>100 x 100px<br/>máximo 1 MB</p>
            </div>
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
