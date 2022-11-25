import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult
} from "next";
import { parseCookies } from "nookies";
import { api } from "../services/apiClient";

export function canSSRSignUp<P>(fn: GetServerSideProps<P>) {
  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx);

    const token = cookies['@nextauth.token'];

    if (token) return {
      redirect: {
        destination: '/admin-panel',
        permanent: false
      }
    }

    const user = await api.get('/user', {});
    const countUser = user.data._count;

    if (countUser > 0) return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    } 

    return await fn(ctx);
  }
}