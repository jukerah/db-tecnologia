import axios, { AxiosError } from 'axios';
import { destroyCookie, parseCookies } from 'nookies';
import { AuthTokenError } from './erros/AuthTokenError';

import Router from 'next/router';

export function setupAPIClient(ctx = undefined) {
  let cookies = parseCookies(ctx);

  const api = axios.create({
    baseURL: process.env.BACKEND_URL,
    headers: {
      Authorization: `Bearer ${cookies['@nextauth.token']}`
    }
  });

  api.interceptors.response.use(response => {
    return response;
  }, (error: AxiosError) => {
    if (error.response.status === 401) {
      if (typeof window !== undefined) {
        try {
          destroyCookie(undefined, '@nextauth.token');
          Router.push('/');
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      return Promise.reject(new AuthTokenError());
    }

    return Promise.reject(error);
  });

  return api;
}