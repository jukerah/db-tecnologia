import '../styles/fonts.css';
import GlobalStyle from '../styles/globalStyles';
import type { AppProps } from 'next/app';
import 'react-toastify/dist/ReactToastify.css';
import { SpecialModalBackground } from "../styles/index";

import { ToastContainer } from 'react-toastify';
import { ModalProvider } from 'styled-react-modal'
import { AuthProvider } from '../contexts/AuthContext';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <GlobalStyle />

      <ToastContainer
        autoClose={3000}
        theme="colored"
      />
      
      <ModalProvider backgroundComponent={SpecialModalBackground}>
        <Component {...pageProps} />
      </ModalProvider>
    </AuthProvider>
  )
}
