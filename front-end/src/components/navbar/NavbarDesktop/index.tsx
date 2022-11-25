import { useContext } from "react";
import Link from "next/link";
import * as C from "./styles";

import { FiChevronDown } from 'react-icons/fi';

import { AuthContext } from '../../../contexts/AuthContext';

import OutlineButton from "../../button/OutlineButton";

export default function NavbarDesktop() {
  const { isAuthenticated, signOut, user } = useContext(AuthContext);

  return (
    <C.Navbar>
      <ul className="menu">
        <C.Dropdown>
          <button className="menu-item">
            Serviços
            <FiChevronDown />
          </button>
          <ul className="list-dropdown">
            <li>
              <Link href={"/site"} className="dropdown-item">
                Site Institucional
              </Link>
            </li>
            <li>
              <Link href={"/loja-virtual"} className="dropdown-item">
                Loja Virtual
              </Link>
            </li>
            <li>
              <Link href={"/ecommerce"} className="dropdown-item">
                eCommerce
              </Link>
            </li>
            <li>
              <Link href={"/landing-page"} className="dropdown-item">
                Landing Page
              </Link>
            </li>
            <li>
              <Link href={"/inteligencia-artificial"} className="dropdown-item">
                IA - Inteligência Artificial
              </Link>
            </li>
            <li>
              <Link href={"/bots"} className="dropdown-item">
                Bots
              </Link>
            </li>
            <li>
              <Link href={"/blogs"} className="dropdown-item">
                Blogs
              </Link>
            </li>
            <li>
              <Link href={"/aplicativos"} className="dropdown-item">
                Aplicativos
              </Link>
            </li>
          </ul>
        </C.Dropdown>
        <li>
          <Link href={"/portfolio"} className="menu-item">
            Portfólio
          </Link>
        </li>
        <li>
          <Link href={"/quem-somos"} className="menu-item">
            Quem Somos
          </Link>
        </li>
        <li>
          <Link href={"/contato"} className="menu-item">
            Contato
          </Link>
        </li>

        {isAuthenticated ? 
          <C.Dropdown>
            <button className="menu-item">
              {user.username}
              <FiChevronDown />
            </button>
            <ul className="list-dropdown">
              <li>
                <Link href={"/admin-panel"} className="dropdown-item">
                  Admin Panel
                </Link>
              </li>
              <li>
                <Link href={"/account"} className="dropdown-item">
                  Dados da Conta
                </Link>
              </li>
              <li onClick={signOut}>
                <a className="dropdown-item">
                  Sair
                </a>
              </li>
            </ul>
          </C.Dropdown>
        :
          <li>
            <OutlineButton>
              <Link href={"/login"}>
                Login
              </Link>
            </OutlineButton>
          </li>
        }
        
      </ul>
    </C.Navbar>
  )
}
