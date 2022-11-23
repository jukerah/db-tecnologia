import { useState } from "react";
import * as C from "./styles";

import { FiChevronDown } from 'react-icons/fi';

export default function NavbarDesktop() {
  const [ isAuthenticated, setIsAuthenticated ] = useState<boolean>(false);

  function handleLogout() {
    setIsAuthenticated(false);
  }

  function handleLogin() {
    setIsAuthenticated(true);
  }

  return (
    <C.Navbar>
      <ul className="menu">
        <C.Dropdown>
          <a>
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
          <C.Dropdown>
            <a>
              username
              <FiChevronDown />
            </a>
            <ul className="list-dropdown">
              <li>Admin Panel</li>
              <li>Dados da Conta</li>
              <li onClick={handleLogout}>
                Sair
              </li>
            </ul>
          </C.Dropdown>
        :
          <li>
            <button onClick={handleLogin}>Login</button>
          </li>
        }
        
      </ul>
    </C.Navbar>
  )
}
