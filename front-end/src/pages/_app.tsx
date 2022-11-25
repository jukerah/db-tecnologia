import '../styles/fonts.css';
import GlobalStyle from '../styles/globalStyles';
import type { AppProps } from 'next/app';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthProvider } from '../contexts/AuthContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <GlobalStyle />

      <ToastContainer
        autoClose={3000}
        theme="colored"
      />

      <Component {...pageProps} />
    </AuthProvider>
  )
}
