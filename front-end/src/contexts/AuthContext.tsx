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

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [ user, setUser ] = useState<UserProps>({id: "", username: "", email: ""});
  const [ isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const { '@nextauth.token': token } = parseCookies();

    if (token) {
      api.get('/me').then(response => {
        const { id, username, email } = response.data;

        setUser({ id, username, email });
        authenticated(true);
      })
      .catch(() => {
        signOut();
        authenticated(false);
      })
    } else {
      authenticated(false);
    }
  });

  function authenticated(status: boolean) {
    setIsAuthenticated(status);
  }

  function signOut() {
    try { 
      destroyCookie(undefined, '@nextauth.token');
      Router.push('/login');
      setIsAuthenticated(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function signIn({ user, password }: SignInProps) {
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

      Router.push('/admin-panel');
    } catch (error) {
      toast.error('Usuário ou senha inválido!');
      console.log(error);
    }
  }

  return(
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}