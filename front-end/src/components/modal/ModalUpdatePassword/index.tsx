import * as C from "./styles";
import { Modal } from "../Modal";
import FormTitle from "../../title/FormTitle";

interface ModalUpdatePasswordProps {
  isOpened: boolean;
  toggleModal: () => void;
}

export default function ModalUpdatePassword({ isOpened, toggleModal }: ModalUpdatePasswordProps) {
  return (
    <Modal toggleModal={toggleModal} isOpened={isOpened} >
      <C.Form>
        <FormTitle>Alterar Senha</FormTitle>
        <button onClick={toggleModal}>fechar</button>
      </C.Form>
    </Modal>
  )
}
