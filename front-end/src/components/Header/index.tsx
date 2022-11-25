import Image from "next/image";
import * as C from "./styles";

import logo from "../../assets/logo/logo.svg";

import NavbarDesktop from "../navbar/NavbarDesktop";
import NavbarMobile from "../navbar/NavbarMobile";
import Link from "next/link";

export default function Header() {

  return (
    <C.Header>
      <Link href={"/"}>
        <Image
          src={logo}
          alt="Logotipo DB Tecnlogia"
          width={100}
          height={40}
        />
      </Link>
      
      <NavbarDesktop />

      <NavbarMobile />

    </C.Header>
  )
}
