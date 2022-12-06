import { GetServerSideProps } from "next";

export function canSSRServices<P>(fn: GetServerSideProps<P>) {
  return async () => {
    return {
      redirect: {
        destination: '/#servicos',
        permanent: false
      }
    }
  }
}