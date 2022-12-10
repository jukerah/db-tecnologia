import { useState, FormEvent } from 'react';
import Link from "next/link";
import * as C from "./styles";
import { theme } from "../../../styles/Theme";
import { toast } from 'react-toastify';

import { BsWhatsapp } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { FiSend } from 'react-icons/fi';

import { PrimaryButton } from "../../button/PrimaryButton";
import TitlePage from "../../title/TitlePage";
import { Input, TextArea } from '../../TextField';

export default function Contact() {
  const [ contactName, setContactName ] = useState<string>("");
  const [ alertContactName, setAlertContactName ] = useState<boolean>(false);
  const [ contactMessage, setContactMessage ] = useState<string>("");
  const [ alertContactMessage, setAlertContactMessage ] = useState<boolean>(false);

  const phone = "+55 12 98822-9778";
  const email = "exemplo@exemplo.com";

  function validatedContactForm() {
    if (contactName === "" && contactMessage === "") {
      setAlertContactName(true);
      setAlertContactMessage(true);
      toast.error('Por favor, preencha o campos nome e mensagem!');
      return false;
    }
    if (contactName === "") {
      setAlertContactName(true);
      toast.error('Por favor, preencha o campo nome!');
      return false;
    }
    if (contactMessage === "") {
      setAlertContactMessage(true);
      toast.error('Por favor, preencha o campo mensagem!');
      return false;
    }
    return true;
  };

  function handleClickContactForm(event: FormEvent) {
    event.preventDefault();

    if (!validatedContactForm()) return;

    const convertedPhone = phone
      .replaceAll("+", "")
      .replaceAll(" ", "")
      .replaceAll("-", "");

    const convertedMessage = encodeURIComponent(`Olá meu nome é ${contactName}, ${contactMessage}`);

    setContactName('');
    setContactMessage('');
    window.open(`https://api.whatsapp.com/send?phone=${convertedPhone}&text=${convertedMessage}`, '_blank');
  }

  return (
    <C.Contact id="contato">
      <div className="container">
        <TitlePage>Fale com a gente</TitlePage>

        <div className="contact">
          <div className="container-info">
            <p className="description">Entre em contato através do formulário ou através de um de nossos contatos. Responderemos o mais rápido possível.</p>

            <div className="commercial-service">
              <h2>Atendimento Comercial</h2>
              <p>Segunda a Sexta – 09:00 às 18:00</p>
              <p>Sábado – 09:00 às 13:00</p>
            </div>

            <div className="contact-details">
              <Link
                href={`tel:${phone}`}
                target="_blank"
                className="detail-item"
              >
                <BsWhatsapp
                  size={24}
                  color={theme.colors.black}
                />
                {phone}
              </Link>

              <Link
                href={`mailto:${email}`}
                target="_blank"
                className="detail-item"
              >
                <FiMail
                  size={24}
                  color={theme.colors.black}
                />
                {email}
              </Link>
            </div>
          </div>

          <form
            onSubmit={handleClickContactForm} 
            className="contact-form"
          >
            <div className="container-input">
              <label htmlFor="contact-name">Nome:</label>

              <Input
                type="text"
                id="contact-name"
                name="contact-name"
                aria-label="Nome"
                placeholder="Digite o seu nome"
                value={contactName}
                onChange={(e) => {
                  setAlertContactName(false);
                  setContactName(e.target.value)
                }}
                alert={alertContactName}
              />

              {alertContactName &&
                <p className="alert">
                  Por favor, digite o seu nome!
                </p>
              }

            </div>

            <div className="container-input">
              <label htmlFor="contact-name">Mensagem:</label>

              <TextArea
                id="contact-message"
                name="contact-message"
                aria-label="Mensagem"
                placeholder="Digite a sua mensagem"
                value={contactMessage}
                onChange={(e) => {
                  setAlertContactMessage(false);
                  setContactMessage(e.target.value)
                }}
                alert={alertContactMessage}
              />

              {alertContactMessage &&
                <p className="alert">
                  Por favor, digite a sua mensagem!
                </p>
              }
            </div>

            <PrimaryButton
              type="submit"
              backgroundColor={theme.colors.luckPoint}
              color={theme.colors.white}
            >
              <span>
                Iniciar Conversa
                <FiSend
                size={24}
                color={theme.colors.white}
              />
              </span>
            </PrimaryButton>
          </form>
        </div>
      </div>
    </C.Contact>
  )
}