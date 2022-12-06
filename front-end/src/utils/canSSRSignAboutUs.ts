import { GetServerSideProps } from "next";

export function canSSRAboutUs<P>(fn: GetServerSideProps<P>) {
  return async () => {
    return {
      redirect: {
        destination: '/#quem-somos',
        permanent: false
      }
    }
  }
}