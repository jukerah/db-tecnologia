import { useEffect } from "react"
import type { AppProps } from "next/app";
import GlobalStyle from "../styles/globalStyles";
import "../styles/fonts.css";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router"
import NProgress from "nprogress";
import "../styles/nprogress.css";

import { ToastContainer } from "react-toastify";
import { ModalProvider } from "styled-react-modal"
import { SpecialModalBackground } from "../components/modal/Modal/styles";
import { AuthProvider } from "../contexts/AuthContext";

import { ThemeProvider } from "styled-components";
import { theme } from "../styles/Theme";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url: string) => {
      NProgress.start();
    }

    const handleStop = () => {
      NProgress.done();
    }

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    }
  }, [router]);

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
