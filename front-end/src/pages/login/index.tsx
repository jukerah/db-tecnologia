import { useState, useContext, FormEvent } from 'react';
import Head from "next/head";
import Link from 'next/link';
import * as C from "./styles";
import { toast } from 'react-toastify';

import Header from "../../components/Header";
import { Input } from "../../components/TextField";
import { Button } from "../../components/button/PrimaryButton";
import { theme } from '../../styles/Theme';

import { AuthContext } from '../../contexts/AuthContext';
import { canSSRGuest } from '../../utils/canSSRGuest';

export default function Login() {
  const { signIn } = useContext(AuthContext);
  const [ user, setUser ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');
  const [ isLoading, setIsLoading ] = useState<boolean>(false);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();
    console.log('entrou handleLogin');

    if (user === '' || password === '') {
      toast.error('Por favor, preencha os campos email e senha!');
      return;
    }

    setIsLoading(true);

    const data = {
      user,
      password
    };

    await signIn(data);

    setIsLoading(false);
  }

  return (
    <C.Login>
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

        <C.ContainerLogin>
          <C.Form onSubmit={handleLogin}>
            <h1>Acessar</h1>
            
            <Input
              type="text"
              placeholder="Usuário*"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />

            <Input
              type="password"
              placeholder="Senha*"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              loading={isLoading}
              backgroundColor={theme.colors.aquamarine}
              color="black"
              disabled={isLoading}
            >
              Entrar
            </Button>

            <Link
              className="forgot-password"
              href="/login"
            >
              Esqueceu a senha?
            </Link>
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
