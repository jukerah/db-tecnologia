import Image from "next/image";
import * as C from "./styles";

import logo from "../../assets/logo/logo.svg";

import NavbarDesktop from "../navbar/NavbarDesktop";
import NavbarMobile from "../navbar/NavbarMobile";

export default function Header() {

  return (
    <C.Header>
      <Image
        src={logo}
        alt="Logotipo DB Tecnlogia"
        width={100}
        height={40}
      />
      
      <NavbarDesktop />

      <NavbarMobile />

    </C.Header>
  )
}
