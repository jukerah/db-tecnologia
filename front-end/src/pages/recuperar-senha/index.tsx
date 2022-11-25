import { useState, useContext, FormEvent } from 'react';
import Head from "next/head";
import Router from 'next/router';
import { toast } from 'react-toastify';
import * as C from "./styles";
import { theme } from '../../styles/Theme';

import Header from "../../components/Header";
import { Input } from "../../components/TextField";
import { Button } from "../../components/button/PrimaryButton";

import { AuthContext } from '../../contexts/AuthContext';
import { canSSRGuest } from '../../utils/canSSRGuest';

import { api } from '../../services/apiClient';
import FormTitle from '../../components/title/FormTitle';

export default function Login() {
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
    <C.Login>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FFFFFF" />
        <title>DB Tecnologia - Recuperar senha</title>
        <meta name="description" content="Recupere sua senha." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <Header />

        <C.ContainerLogin>
          <C.Form onSubmit={handleForgotPassword}>
            <FormTitle>Recuperar Senha</FormTitle>
            
            <Input
              aria-label="E-mail"
              type="text"
              placeholder="E-mail*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Button
              type="submit"
              loading={isLoading}
              backgroundColor={theme.colors.aquamarine}
              color="black"
              disabled={isLoading}
            >
              Recuperar
            </Button>
          </C.Form>
        </C.ContainerLogin>
      </>
    </C.Login>
  )
}

export const getServerSideProps = canSSRGuest(async (ctx) => {
  return {
    props: {}
  }
});
