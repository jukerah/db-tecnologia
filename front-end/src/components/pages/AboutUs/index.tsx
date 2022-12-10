import Link from "next/link";
import Image from 'next/image';
import * as C from "./styles";

import TitlePage from "../../title/TitlePage";

interface EmployeeProps {
  id: string;
  name: string;
  linkedin: string;
  photo: string;
}

interface PageProps {
  listEmployee: EmployeeProps[];
}

export default function AboutUs({ listEmployee }: PageProps) {
  function myLoader({ src }){
    return `${process.env.BACKEND_URL}/images/${src}`;
  };

  return (
    <C.AboutUs id="quem-somos">
      <div className="container">
        <TitlePage>Quem Somos</TitlePage>

        <p className="about-company">Somos empresa especializada na implementação de soluções de alta qualidade e tecnologia em gestão empresarial, proporcionando diferencial competitivo para nossos clientes por meio do gerenciamento integrado e de acordo com as necessidades de cada organização. Atendemos nossos clientes com soluções Senior e complementares verticalizadas, integrando e gerando informações precisas e confiáveis para a gestão das organizações.</p>

        <div className="team">
          <div className="ceo">
            <Link
              aria-label={"Linkedin do colaborador ceo"}
              href="https://www.linkedin.com/in/deivid-bastos-b0366786"
              target="_blank"
            >
              <Image
                src={"/ceo.png"}
                alt={"Foto do ceo da empresa."}
                width={250}
                height={250}
              />
            </Link>

            <p className="about-ceo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
          </div>

          <div className="list-employee">
            {listEmployee.map(({id, name, linkedin, photo}: EmployeeProps) => (
              <Link
                aria-label={`Linkedin do colaborador ${name}`}
                key={id}
                href={linkedin}
                target="_blank"
                className="employee"
              >
                <Image
                  loader={myLoader}
                  src={photo}
                  alt={`Foto do colaborador ${name}`}
                  width={100}
                  height={100}
                  priority
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </C.AboutUs>
  )
}