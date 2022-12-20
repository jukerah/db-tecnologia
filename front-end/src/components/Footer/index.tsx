import Link from "next/link";
import { theme } from "../../styles/Theme";
import Logo from "../Logo";
import * as C from "./styles";

import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";

interface FooterProps {
  phone: string;
  email: string;
}

export default function Footer({ phone, email }: FooterProps) {
  const date = new Date()
  const currentYear = date.getFullYear();

  return (
    <C.Footer>
      <div className="container-nav">
        <div className="container">
          <Logo />
          <p>Siga a gente nas redes sociais</p>
          <div className="social-media">
            <Link
              aria-label="Facebook da DB Tecnologia"
              href="https://www.facebook.com/"
              target="_blank"
            >
              <BsFacebook
                size={32}
                color={theme.colors.grayLight}
              />
            </Link>
            
            <Link
              aria-label="Instagram da DB Tecnologia"
              href="https://www.instagram.com/"
              target="_blank"
            >
              <BsInstagram
                size={32}
                color={theme.colors.grayLight}
              />
            </Link>

            <Link
              aria-label="WhatSapp da DB Tecnologia"
              href="https://api.whatsapp.com/send?phone=5512988229778"
              target="_blank"
            >
              <BsWhatsapp
                size={32}
                color={theme.colors.grayLight}
              />
            </Link>
          </div>
        </div>

        <div className="container">
          <h2>A Agência</h2>
          <Link href="/#quem-somos">&gt; Quem Somos</Link>
          <Link href="/#portfolio">&gt; Portfólio</Link>
          <Link href="/#servicos">&gt; Serviços</Link>
        </div>

        {/* <div className="container">
          <h2>Serviços</h2>
          <Link href="/site-institucional">&gt; Site Institucional</Link>
          <Link href="/loja-virtual">&gt; Loja Virtual</Link>
          <Link href="/ecommerce">&gt; eCommerce</Link>
          <Link href="/landing-page">&gt; Landing Page</Link>
          <Link href="/inteligencia-artificial">&gt; IA - Inteligência Antificial</Link>
          <Link href="/bots">&gt; Bots</Link>
          <Link href="/blogs">&gt; Blogs</Link>
          <Link href="/jogos">&gt; Jogos</Link>
          <Link href="/aplicativos">&gt; Aplicativos</Link>
        </div> */}

        <div className="container">
          <h2>Fale Com a Gente</h2>

          <Link
            href={`mailto:${email}`}
            target="_blank"
          >
            {email}
          </Link>

          <Link
            href={`tel:${phone}`}
            target="_blank"
          >
            {phone}
          </Link>

          <div className="contact">
            <h3>Comercial</h3>
            <p>Atendimento por WhatsApp ou e-mail.</p>
          </div>

          <div className="contact">
            <h3>Suporte</h3>
            <p>Atendimento por WhatsApp ou e-mail.</p>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>© 2010 - {currentYear} DB Tecnologia. Todos os direitos reservados.</p>
        <p>Desenvolvido por <Link href="https://marioelvio.com" target="_blank">Mario Elvio</Link>.</p>
      </div>
    </C.Footer>
  )
}