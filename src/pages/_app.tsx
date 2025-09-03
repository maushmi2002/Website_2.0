import "@/styles/globals.css";
import { AuthProvider } from '@/context/AuthContext';
import type { AppProps } from "next/app";
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Force dark mode consistently regardless of device preference
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
