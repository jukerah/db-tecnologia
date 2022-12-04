import { useState, useContext, FormEvent } from 'react';
import Head from "next/head";
import Link from 'next/link';
import * as C from "./styles";
import { toast } from 'react-toastify';

import Header from "../../components/Header";
import FormTitle from '../../components/title/FormTitle';
import { Input } from "../../components/TextField";
import { PrimaryButton } from "../../components/button/PrimaryButton";
import { theme } from '../../styles/Theme';

import { AuthContext } from '../../contexts/AuthContext';
import { canSSRLogin } from '../../utils/canSSRLogin';

export default function Login() {
  const { signIn } = useContext(AuthContext);
  const [ user, setUser ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');
  const [ isLoading, setIsLoading ] = useState<boolean>(false);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    if (user === '' || password === '') {
      toast.error('Por favor, preencha os campos usuário e senha!');
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
        <title>DB Tecnologia - Login</title>
        <meta name="description" content="Acesse sua conta." />
      </Head>

      <>
        <Header />

        <C.ContainerLogin>
          <C.Form onSubmit={handleLogin}>
            <FormTitle>Acessar</FormTitle>
            
            <Input
              aria-label="Usuário"
              type="text"
              placeholder="Usuário*"
              value={user}
              onChange={(e) => setUser(e.target.value)}
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
              <span>Entrar</span>
            </PrimaryButton>

            <Link
              className="password-reset"
              href="/password-reset"
            >
              Esqueceu sua senha?
            </Link>
          </C.Form>
        </C.ContainerLogin>
      </>
    </C.Login>
  )
}

export const getServerSideProps = canSSRLogin(async (ctx) => {
  return {
    props: {}
  }
});
