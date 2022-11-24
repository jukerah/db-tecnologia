import { createContext, ReactNode, useState, useEffect } from 'react';
import Router from 'next/router';
import { destroyCookie, setCookie, parseCookies } from 'nookies';
import { toast } from 'react-toastify';

import { api } from '../services/apiClient';

type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  signOut: () => void;
  signUp: (credentials: SignUpProps) => Promise<void>;
}

type UserProps = {
  id: string;
  username: string;
  email: string;
}

type SignInProps = {
  user: string;
  password: string;
}

type AuthProviderProps = {
  children: ReactNode;
}

type SignUpProps = {
  username: string;
  email: string;
  password: string;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [ user, setUser ] = useState<UserProps>({id: "", username: "", email: ""});
  const [ isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  console.log(isAuthenticated);

  useEffect(() => {
    const { '@nextauth.token': token } = parseCookies();

    if (token) {
      api.get('/me').then(response => {
        const { id, username, email } = response.data;

        setUser({ id, username, email });
        isNotAuthenticated(true);
      })
      .catch(() => {
        signOut();
        isNotAuthenticated(false);
      })
    } else {
      isNotAuthenticated(false);
    }
  });

  function isNotAuthenticated(status: boolean) {
    setIsAuthenticated(status);
  }

  function signOut() {
    try {
      destroyCookie(undefined, '@nextauth.token');
      Router.push('/');
      setIsAuthenticated(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function signIn({ user, password }: SignInProps) {
    console.log('entrou signIn');
    try {
      const response = await api.post('/session', {
        user,
        password
      });

      setCookie(undefined, '@nextauth.token', response.data.token, {
        maxAge: 60 * 60 * 24 * 30, //30 days
        path: "/"
      });

      const { id, username, email, token } = response.data;

      setUser({ id, username, email });
      setIsAuthenticated(true);

      api.defaults.headers['Authorization'] = `Bearer ${token}`

      toast.success('Logado com sucesso!');

      Router.push('/admin-panel');
    } catch (error) {
      toast.error('Usuário ou senha inválido!');
      console.log(error);
    }
  }

  async function signUp({ username, email, password }: SignUpProps) {
    try {
      const response = await api.post('/users', {
        username,
        email,
        password
      });

      toast.success('Usuário cadastrado com sucesso!');

      Router.push('/');
    } catch (error) {
      toast.error('Erro ao cadastrar usuário!');
      console.log(error);
    }
  }

  return(
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}