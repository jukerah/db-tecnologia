import '../styles/fonts.css';
import GlobalStyle from '../styles/globalStyles';
import type { AppProps } from 'next/app';

import { AuthProvider } from '../contexts/AuthContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </AuthProvider>
  )
}
