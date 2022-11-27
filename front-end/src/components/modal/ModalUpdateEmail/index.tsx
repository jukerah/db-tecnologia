import * as C from "./styles";
import { Modal } from "../Modal";
import FormTitle from "../../title/FormTitle";

interface ModalUpdateEmailProps {
  isOpened: boolean;
  toggleModal: () => void;
}

export default function ModalUpdateEmail({ isOpened, toggleModal }: ModalUpdateEmailProps) {
  return (
    <Modal toggleModal={toggleModal} isOpened={isOpened} >
      <C.Form>
        <FormTitle>Alterar E-mail</FormTitle>
        <button onClick={toggleModal}>fechar</button>
      </C.Form>
    </Modal>
  )
}
