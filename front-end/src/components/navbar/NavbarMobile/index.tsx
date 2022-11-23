import { useState } from "react";
import * as C from "./styles";

import { FiChevronDown } from 'react-icons/fi';

export default function NavbarMobile() {
  const [ isOpenedMenuMobile, setIsOpenedMenuMobile ] = useState<boolean>(false);
  const [ isOpenedServices, setIsOpenedServices ] = useState<boolean>(false);
  const [ isOpenedOptions, setIsOpenedOptions ] = useState<boolean>(false);
  const [ isAuthenticated, setIsAuthenticated ] = useState<boolean>(false);

  return (
    <>
      <C.MenuButton
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
            <a
              onClick={() => isOpenedServices ? setIsOpenedServices(false) : setIsOpenedServices(true)}
            >
              Serviços
              <FiChevronDown />
            </a>
            <ul className="list-dropdown">
              <li>Site Institucional</li>
              <li>Loja Virtual</li>
              <li>eCommerce</li>
              <li>Landing Page</li>
              <li>IA - Inteligência Artificial</li>
              <li>Bots</li>
              <li>Blogs</li>
              <li>Jogos</li>
              <li>Aplicativos</li>
            </ul>
          </C.Dropdown>
          <li>Portfólio</li>
          <li>Quem Somos</li>
          <li>Contato</li>

          {isAuthenticated ?
            <C.Dropdown
              className="options"
              isOpened={isOpenedOptions}
            >
              <a
                onClick={() => isOpenedOptions ? setIsOpenedOptions(false) : setIsOpenedOptions(true)}
              >
                username
                <FiChevronDown />
              </a>
              <ul className="list-dropdown">
                <li>Admin Panel</li>
                <li>Dados da Conta</li>
                <li onClick={() => setIsAuthenticated(false)}>
                  Sair
                </li>
            </ul>
          </C.Dropdown>
        :
          <li>
            <button onClick={() => setIsAuthenticated(true)}>Login</button>
          </li>
        }
        </ul>
      </C.Navbar>
    </>
  )
}
