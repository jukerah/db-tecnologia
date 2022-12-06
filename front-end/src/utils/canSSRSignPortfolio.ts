import { GetServerSideProps } from "next";

export function canSSRPortfolio<P>(fn: GetServerSideProps<P>) {
  return async () => {
    return {
      redirect: {
        destination: '/#portfolio',
        permanent: false
      }
    }
  }
}