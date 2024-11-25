import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // TypeScript-friendly dynamic import for Bootstrap JS
    (async () => {
      const bootstrap = await import('bootstrap/dist/js/bootstrap.bundle.min.js');
      return bootstrap;
    })();
  }, []);

  return <Component {...pageProps} />;
}
