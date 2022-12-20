import { useState, useContext } from "react";
import Link from "next/link";
import * as C from "./styles";

import { FiChevronDown } from 'react-icons/fi';

import { AuthContext } from '../../../contexts/AuthContext';

export default function NavbarMobile() {
  const [ isOpenedMenuMobile, setIsOpenedMenuMobile ] = useState<boolean>(false);
  const [ isOpenedServices, setIsOpenedServices ] = useState<boolean>(false);
  const [ isOpenedOptions, setIsOpenedOptions ] = useState<boolean>(false);
  
  const { isAuthenticated, signOut, user } = useContext(AuthContext);

  return (
    <>
      <C.MenuButton
        aria-label="menu"
        onClick={() => isOpenedMenuMobile ? setIsOpenedMenuMobile(false) : setIsOpenedMenuMobile(true)}
        isOpened={isOpenedMenuMobile}
      >
        <div></div>
        <div></div>
        <div></div>
      </C.MenuButton>

      <C.Navbar isOpened={isOpenedMenuMobile}>
        <ul className="menu">
          <C.Dropdown isOpened={isOpenedServices}>
            <Link
              href={"/#servicos"}
              className="dropdown-item"
              onClick={() => isOpenedServices ? setIsOpenedServices(false) : setIsOpenedServices(true)}
            >
              Serviços
              {/* <FiChevronDown /> */}
            </Link>
            {/* <ul className="list-dropdown">
              <li>
                <Link
                  href={"/site"}
                  className="dropdown-item"
                  onClick={() => setIsOpenedMenuMobile(false)}
                >
                  Site Institucional
                </Link>
              </li>
              <li>
                <Link
                  href={"/loja-virtual"}
                  className="dropdown-item"
                  onClick={() => setIsOpenedMenuMobile(false)}
                >
                  Loja Virtual
                </Link>
              </li>
              <li>
                <Link
                  href={"/ecommerce"}
                  className="dropdown-item"
                  onClick={() => setIsOpenedMenuMobile(false)}
                >
                  eCommerce
                </Link>
              </li>
              <li>
                <Link
                  href={"/landing-page"}
                  className="dropdown-item"
                  onClick={() => setIsOpenedMenuMobile(false)}
                >
                  Landing Page
                </Link>
              </li>
              <li>
                <Link
                  href={"/inteligencia-artificial"}
                  className="dropdown-item"
                  onClick={() => setIsOpenedMenuMobile(false)}
                >
                  IA - Inteligência Artificial
                </Link>
              </li>
              <li>
                <Link
                  href={"/bots"}
                  className="dropdown-item"
                  onClick={() => setIsOpenedMenuMobile(false)}
                >
                  Bots
                </Link>
              </li>
              <li>
                <Link
                  href={"/blogs"}
                  className="dropdown-item"
                  onClick={() => setIsOpenedMenuMobile(false)}
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href={"/aplicativos"}
                  className="dropdown-item"
                  onClick={() => setIsOpenedMenuMobile(false)}
                >
                  Aplicativos
                </Link>
              </li>
            </ul> */}
          </C.Dropdown>
          <li>
            <Link
              href={"/#portfolio"}
              className="menu-item"
              onClick={() => setIsOpenedMenuMobile(false)}
            >
              Portfólio
            </Link>
          </li>
          <li>
            <Link
              href={"/#quem-somos"}
              className="menu-item"
              onClick={() => setIsOpenedMenuMobile(false)}
            >
              Quem Somos
            </Link>
          </li>
          <li>
            <Link
              href={"/#contato"}
              className="menu-item"
              onClick={() => setIsOpenedMenuMobile(false)}
            >
              Contato
            </Link>
          </li>

          {isAuthenticated ?
            <C.Dropdown
              className="options"
              isOpened={isOpenedOptions}
            >
              <a
                onClick={() => isOpenedOptions ? setIsOpenedOptions(false) : setIsOpenedOptions(true)}
              >
                {user.username}
                <FiChevronDown />
              </a>
              <ul className="list-dropdown">
                <li>
                  <Link
                    href={"/admin-panel"}
                    className="dropdown-item"
                    onClick={() => setIsOpenedMenuMobile(false)}
                  >
                    Admin Panel
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/account"}
                    className="dropdown-item"
                    onClick={() => setIsOpenedMenuMobile(false)}
                  >
                    Dados da Conta
                  </Link>
                </li>
                <li onClick={signOut}>
                  <a
                    className="dropdown-item"
                    onClick={() => setIsOpenedMenuMobile(false)}
                  >
                    Sair
                  </a>
                </li>
            </ul>
          </C.Dropdown>
        :
          <li className="login">
            <Link
              href={"/login"}
              onClick={() => setIsOpenedMenuMobile(false)}
            >
              Login
            </Link>
          </li>
        }
        </ul>
      </C.Navbar>
    </>
  )
}
