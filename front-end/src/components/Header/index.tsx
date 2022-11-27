import * as C from "./styles";

import NavbarDesktop from "../navbar/NavbarDesktop";
import NavbarMobile from "../navbar/NavbarMobile";
import Logo from "../Logo";

export default function Header() {

  return (
    <C.Header>
      <Logo />
      
      <NavbarDesktop />

      <NavbarMobile />

    </C.Header>
  )
}
