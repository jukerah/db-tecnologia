import Link from "next/link";
import * as C from "./styles";
import { theme } from '../../../../styles/Theme';

import { BsWhatsapp } from 'react-icons/bs';

export function ChatButton() {
  return (
    <Link href={"/#contato"}>
      <C.Button>
      <span>Fale com um especialista</span>

      <div>
        <BsWhatsapp
          size={40}
          color={theme.colors.white}
        />
      </div>
    </C.Button>
    </Link>
  );
}