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
import { Modal } from "../../components/Modal";

export default function Account() {
  const [ isOpen, setIsOpen ] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen)
  }

  return (
    <C.AdminPanel>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FFFFFF" />
        <title>DB Tecnologia - Login</title>
        <meta name="description" content="Acesse sua conta." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <Header />

        <C.ContainerAdminPanel>
          <h1>Dados da Conta</h1>

          <div className="container-button">
            <ModalButton isOpened={() => console.log('test')}>
              <FaUser
                size={32}
                color={theme.colors.white}
              />
              Alterar usuário
            </ModalButton>

            <ModalButton isOpened={() => console.log('test')}>
              <MdEmail
                size={32}
                color={theme.colors.white}
              />
              Alterar e-mail
            </ModalButton>

            <ModalButton isOpened={toggleModal}>
              <IoIosLock
                size={32}
                color={theme.colors.white}
              />
              Alterar senha
            </ModalButton>
          </div>

          <Modal
            isOpen={isOpen}
            toggleModal={toggleModal}
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
