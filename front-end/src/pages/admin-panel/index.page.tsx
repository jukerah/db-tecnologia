import Head from "next/head";
import * as C from "./styles";
import { theme } from "../../styles/Theme";

import { canSSRAuth } from "../../utils/canSSRAuth";

import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { TbUsers } from 'react-icons/tb';

import Header from "../../components/Header";
import { NavegationButton } from "../../components/button/NavegationButton";

export default function AdminPanel() {
  return (
    <C.AdminPanel>
      <Head>
        <title>DB Tecnologia - Admin Panel</title>
        <meta name="description" content="Admin Panel." />
      </Head>

      <>
        <Header />

        <C.ContainerAdminPanel>
          <h1>Admin Panel</h1>

          <div className="container-button">
            <NavegationButton url="/admin-panel/projects">
              <>
                <AiOutlineFundProjectionScreen
                  size={32}
                  color={theme.colors.white}
                />
                Projetos
              </>
            </NavegationButton>

            <NavegationButton url="/admin-panel/team">
              <>
                <TbUsers
                  size={32}
                  color={theme.colors.white}
                />
                Equipe
              </>
            </NavegationButton>
          </div>
        </C.ContainerAdminPanel>
      </>
    </C.AdminPanel>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => { 
  return {
    props: {}
  }
})
