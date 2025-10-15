import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { get } from 'http';
import { getToken, verifyToken } from '@/services/auth';


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const token = getToken();

    if (!token || !verifyToken(token)) {
      router.replace("/login")
    } 
  }, [router.pathname])

  return <Component {...pageProps} />;
}
