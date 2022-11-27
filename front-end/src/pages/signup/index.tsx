import { useState, FormEvent } from 'react';
import Head from "next/head";
import Router from 'next/router';
import { toast } from 'react-toastify';
import * as C from "./styles";
import { theme } from '../../styles/Theme';

import Header from "../../components/Header";
import { Input } from "../../components/TextField";
import { PrimaryButton } from "../../components/button/PrimaryButton";

import { canSSRSignUp } from '../../utils/canSSRSignUp';

import { api } from '../../services/apiClient';
import FormTitle from '../../components/title/FormTitle';

export default function SignUp() {
  const [ username, setUsername ] = useState<string>('');
  const [ email, setEmail ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');
  const [ isLoading, setIsLoading ] = useState<boolean>(false);

  async function handleSignUp(event: FormEvent) {
    event.preventDefault();

    if (username === '' || email === '' || password === '') {
      toast.error('Por favor, preencha todos os campos');
      return;
    }

    setIsLoading(true);

    await api.post('/user', {
      username,
      email,
      password
    })
    .then(() => {
      toast.success('Usuário cadastrado com sucesso!');
      Router.push('/login');
    })
    .catch((error) => {
      toast.error('Erro ao cadastrar usuário!');
      console.log(error);
    });

    setIsLoading(false);
  }

  return (
    <C.SignUp>
      <Head>
        <title>DB Tecnologia - Cadastrar usuário</title>
        <meta name="description" content="Cadastrar usuário." />
      </Head>

      <>
        <Header />

        <C.ContainerForm>
          <C.Form onSubmit={handleSignUp}>
            <FormTitle>Cadastro</FormTitle>
            
            <Input
              aria-label="Usuário"
              type="text"
              placeholder="Usuário*"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <Input
              aria-label="E-mail"
              type="email"
              placeholder="E-mail*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              aria-label="Senha"
              type="password"
              placeholder="Senha*"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <PrimaryButton
              type="submit"
              loading={isLoading}
              backgroundColor={theme.colors.aquamarine}
              color="black"
              disabled={isLoading}
            >
              Cadastrar
            </PrimaryButton>
          </C.Form>
        </C.ContainerForm>
      </>
    </C.SignUp>
  )
}

export const getServerSideProps = canSSRSignUp(async (ctx) => {
  return {
    props: {}
  }
});
