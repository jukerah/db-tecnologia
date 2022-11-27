import { useState, useContext, FormEvent } from 'react';
import Head from "next/head";
import Router from 'next/router';
import { toast } from 'react-toastify';
import * as C from "./styles";
import { theme } from '../../styles/Theme';

import Header from "../../components/Header";
import { Input } from "../../components/TextField";
import { PrimaryButton } from "../../components/button/PrimaryButton";

import { AuthContext } from '../../contexts/AuthContext';
import { canSSRGuest } from '../../utils/canSSRGuest';

import { api } from '../../services/apiClient';
import FormTitle from '../../components/title/FormTitle';

export default function ForgotPassword() {
  const { signIn } = useContext(AuthContext);
  const [ email, setEmail ] = useState<string>('');
  const [ isLoading, setIsLoading ] = useState<boolean>(false);

  async function handleForgotPassword(event: FormEvent) {
    event.preventDefault();

    if (email === '') {
      toast.error('Por favor, preencha o campo e-mail!');
      return;
    }

    setIsLoading(true);

    await api.post('/password-recovery', {
      email
    })
    .then(() => {
      toast.success('Dados enviados para o e-mail!');
      Router.push('/login');
    })
    .catch((error) => {
      toast.error('Erro ao recuperar senha!');
      console.log(error);
    });

    setIsLoading(false);
  }

  return (
    <C.ForgotPassword>
      <Head>
        <title>DB Tecnologia - Recuperar senha</title>
        <meta name="description" content="Recupere sua senha." />
      </Head>

      <>
        <Header />

        <C.ContainerForm>
          <C.Form onSubmit={handleForgotPassword}>
            <FormTitle>Recuperar Senha</FormTitle>
            
            <Input
              aria-label="E-mail"
              type="text"
              placeholder="E-mail*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <PrimaryButton
              type="submit"
              loading={isLoading}
              backgroundColor={theme.colors.aquamarine}
              color="black"
              disabled={isLoading}
            >
              Recuperar
            </PrimaryButton>
          </C.Form>
        </C.ContainerForm>
      </>
    </C.ForgotPassword>
  )
}

export const getServerSideProps = canSSRGuest(async (ctx) => {
  return {
    props: {}
  }
});
