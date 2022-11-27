import { useState } from 'react';
import Head from "next/head";
import * as C from "./styles";
import { theme } from "../../styles/Theme";

import { canSSRAuth } from "../../utils/canSSRAuth";

import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoIosLock } from 'react-icons/io';

import Header from "../../components/Header";
import { ModalButton } from "../../components/button/ModalButton";
import ModalUpdateUsername from '../../components/modal/ModalUpdateUsername';
import ModalUpdateEmail from '../../components/modal/ModalUpdateEmail';
import ModalUpdatePassword from '../../components/modal/ModalUpdatePassword';

export default function Account() {
  const [ isOpenedModalUpdateUser, setIsOpenedModalUpdateUser ] = useState(false);
  const [ isOpenedModalUpdateEmail, setIsOpenedModalUpdateEmail ] = useState(false);
  const [ isOpenedModalUpdatePassword, setIsOpenedModalUpdatePassword ] = useState(false);

  function toggleModalUpdateUser() {
    setIsOpenedModalUpdateUser(!isOpenedModalUpdateUser)
  }

  function toggleModalUpdateEmail() {
    setIsOpenedModalUpdateEmail(!isOpenedModalUpdateEmail)
  }

  function toggleModalUpdatePassword() {
    setIsOpenedModalUpdatePassword(!isOpenedModalUpdatePassword)
  }

  return (
    <C.AdminPanel>
      <Head>
        <title>DB Tecnologia - Login</title>
        <meta name="description" content="Acesse sua conta." />
      </Head>

      <>
        <Header />

        <C.ContainerAdminPanel>
          <h1>Dados da Conta</h1>

          <div className="container-button">
            <ModalButton isOpened={toggleModalUpdateUser}>
              <FaUser
                size={32}
                color={theme.colors.white}
              />
              Alterar usuário
            </ModalButton>

            <ModalButton isOpened={toggleModalUpdateEmail}>
              <MdEmail
                size={32}
                color={theme.colors.white}
              />
              Alterar e-mail
            </ModalButton>

            <ModalButton isOpened={toggleModalUpdatePassword}>
              <IoIosLock
                size={32}
                color={theme.colors.white}
              />
              Alterar senha
            </ModalButton>
          </div>

          <ModalUpdateUsername
            toggleModal={toggleModalUpdateUser}
            isOpened={isOpenedModalUpdateUser}
          />

          <ModalUpdateEmail
            toggleModal={toggleModalUpdateEmail}
            isOpened={isOpenedModalUpdateEmail}
          />

          <ModalUpdatePassword
            toggleModal={toggleModalUpdatePassword}
            isOpened={isOpenedModalUpdatePassword}
          />
        </C.ContainerAdminPanel>
      </>
    </C.AdminPanel>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => { 
  return {
    props: {}
  }
})
