import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import * as C from "./styles";
import { theme } from "../../../styles/Theme";

import { setupAPIClient } from "../../../services/api";
import { canSSRAuth } from "../../../utils/canSSRAuth";

import Header from "../../../components/Header";
import { ModalButton } from "../../../components/button/ModalButton";
import { Input } from "../../../components/TextField";
import ModalCreateEmployee from "../../../components/modal/team/ModalCreateEmployee";
import ModalUpdateEmployee from "../../../components/modal/team/ModalUpdateEmployee";
import ModalRemoveEmployee from "../../../components/modal/team/ModalRemoveEmployee";

interface EmployeeProps {
  id: string;
  name: string;
  photo: string;
}

interface TeamProps {
  listEmployee: EmployeeProps[];
}

export default function Team({ listEmployee }: TeamProps) {
  const [ employees, setEmployees ] = useState<EmployeeProps[]>(listEmployee);
  const [ employeeId, setEmployeeId ] = useState<string>('');

  const [ searchEmployee, setSearchEmployee ] = useState<string>('');

  const [ isOpenedModalCreateEmployee, setIsOpenedModalCreateEmployee ] = useState<boolean>(false);
  const [ isOpenedModalUpdateEmployee, setIsOpenedModalUpdateEmployee ] = useState<boolean>(false);
  const [ isOpenedModalRemoveEmployee, setIsOpenedModalRemoveEmployee ] = useState<boolean>(false);

  async function refreshListEmployee() {
    const apiClient = setupAPIClient();

    const listEmployee = await apiClient.get('/employees');

    setEmployees(listEmployee.data);
  }

  function toggleModalCreateEmployee() {
    setIsOpenedModalCreateEmployee(!isOpenedModalCreateEmployee);
  }

  function toggleModalUpdateEmployee() {
    setIsOpenedModalUpdateEmployee(!isOpenedModalUpdateEmployee);
  }

  function handleUpdateEmployee(employeeId: string) {
    setEmployeeId(employeeId);
    toggleModalUpdateEmployee();
  }

  function toggleModalRemoveEmployee() {
    setIsOpenedModalRemoveEmployee(!isOpenedModalRemoveEmployee);
  }

  function handleRemoveEmployee(employeeId) {
    setEmployeeId(employeeId);
    toggleModalRemoveEmployee();
  }

  function myLoader({ src }){
    return `${process.env.BACKEND_URL}/images/${src}`;
  };

  return (
    <C.Employees>
      <Head>
        <title>DB Tecnologia - Projetos</title>
        <meta name="description" content="Projetos realizados." />
      </Head>

      <>
        <Header />

        <C.ContainerEmployees>
          <h1>Equipe</h1>

          <C.ContainerHeader>

            <ModalButton
              isOpened={toggleModalCreateEmployee}
              backgroundColor={theme.colors.luckPoint}
              color={theme.colors.white}
            >
              Cadastrar Colaborador
            </ModalButton>

            <Input
              type="text"
              aria-label="Pesquisar colaborador"
              placeholder="Pesquisar colaborador..."
              value={searchEmployee}
              onChange={(e) => setSearchEmployee(e.target.value)}
              search={true}
            />
          </C.ContainerHeader>

          <C.GridEmployees>
            {employees.map(({ id, name, photo}) => name.toLowerCase().includes(searchEmployee.toLowerCase()) && (
              <C.Employee key={id}>
                <div className="photo">
                  <Image
                    loader={myLoader}
                    src={photo}
                    alt={`Foto do colaborador ${name}`}
                    width={300}
                    height={300}
                    priority
                  />
                </div>

                <div className="container-right">
                  <h2>{name}</h2>
                  
                  <div className="container-button">
                    <ModalButton
                      isOpened={() => handleUpdateEmployee(id)}
                      backgroundColor={theme.colors.gold}
                      color={theme.colors.black}
                    >
                      Editar
                    </ModalButton>

                    <ModalButton
                      isOpened={() => handleRemoveEmployee(id)}
                      backgroundColor={theme.colors.coralRed}
                      color={theme.colors.white}
                    >
                      Deletar
                    </ModalButton>
                  </div>
                </div>
              </C.Employee>
            ))}
          </C.GridEmployees>

          <ModalCreateEmployee
            toggleModal={toggleModalCreateEmployee}
            isOpened={isOpenedModalCreateEmployee}
            refreshListEmployee={refreshListEmployee}
          />
          <ModalUpdateEmployee
            toggleModal={toggleModalUpdateEmployee}
            isOpened={isOpenedModalUpdateEmployee}
            refreshListEmployee={refreshListEmployee}
            employeeId={employeeId}
          />
          <ModalRemoveEmployee
            toggleModal={toggleModalRemoveEmployee}
            isOpened={isOpenedModalRemoveEmployee}
            refreshListEmployee={refreshListEmployee}
            employeeId={employeeId}
          />
        </C.ContainerEmployees>
      </>
    </C.Employees>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);

  const listEmployee = await apiClient.get('/employees');

  return {
    props: {
      listEmployee: listEmployee.data
    }
  }
})
