import Head from "next/head";
import * as C from "./styles";

import Header from "../../components/Header";

export default function Custom404() {
  return (
    <C.Custom404>
      <Head>
        <title>DB Tecnologia - Página não encontrada</title>
        <meta name="description" content="Acesse sua conta." />
      </Head>

      <>
        <Header />

        <C.ContainerCustom404>
          <h1>Erro 404</h1>
          <p>Página não encontrada.</p>
        </C.ContainerCustom404>
      </>
    </C.Custom404>
  )
}
