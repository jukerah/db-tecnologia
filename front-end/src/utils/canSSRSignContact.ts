import { GetServerSideProps } from "next";

export function canSSRContact<P>(fn: GetServerSideProps<P>) {
  return async () => {
    return {
      redirect: {
        destination: '/#contato',
        permanent: false
      }
    }
  }
}