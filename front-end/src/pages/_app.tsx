import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/globalStyles';
import '../styles/fonts.css';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';
import { ModalProvider } from 'styled-react-modal'
import { SpecialModalBackground } from "../components/modal/Modal/styles";
import { AuthProvider } from '../contexts/AuthContext';

import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/Theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  )
}
