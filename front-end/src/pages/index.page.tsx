import Head from "next/head";
import * as C from "../styles/index";

import { setupAPIClient } from "../services/api";

import Header from "../components/Header";
import Home from '../components/pages/Home';
import Services from '../components/pages/Services';
import Portfolio from '../components/pages/Portfolio';
import AboutUs from '../components/pages/AboutUs';
import Contact from '../components/pages/Contact';
import Footer from "../components/Footer";
import { ChatButton } from "../components/button/PrimaryButton/ChatButton";

interface ProjectProps {
  id: string;
  name: string;
  project_url: string;
  banner: string;
}

interface EmployeeProps {
  id: string;
  name: string;
  linkedin: string;
  photo: string;
}

interface PageProps {
  listEmployee: EmployeeProps[];
  listProject: ProjectProps[];
}

export default function Index({ listProject, listEmployee }: PageProps) {
  const phone = "+55 12 98822-9778";
  const email = "exemplo@exemplo.com";
  
  return (
    <>
      <C.Index>
        <Head>
          <title>DB Tecnologia</title>
          <meta name="description" content="Aqui você encontra a solução ideal para o seu negócio!" />
        </Head>

        <C.Container>
          <Header />
          
          <C.Pages>
            <Home />

            <Services />

            <Portfolio listProject={listProject} />

            <AboutUs listEmployee={listEmployee} />

            <Contact
              phone={phone}
              email={email}
            />
          </C.Pages>

          <Footer
            phone={phone}
            email={email}
          />
        </C.Container>
      </C.Index>

      <ChatButton />
    </>
  )
}

export const getServerSideProps = async () => {
  const apiClient = setupAPIClient();

  const listProject = await apiClient.get('/projects');
  const listEmployee = await apiClient.get('/employees');

  return {
    props: {
      listProject: listProject.data,
      listEmployee: listEmployee.data
    }
  }
}