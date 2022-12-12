import Head from "next/head";
import * as C from "./styles";

import Header from "../../components/Header";

export default function Custom500() {
  return (
    <C.Custom500>
      <Head>
        <title>DB Tecnologia - Página está em manutenção</title>
        <meta name="description" content="Acesse sua conta." />
      </Head>

      <>
        <Header />

        <C.ContainerCustom500>
          <h1>Site está em manutenção</h1>
          <p>Tente entrar novamente mais tarde.</p>
        </C.ContainerCustom500>
      </>
    </C.Custom500>
  )
}
