import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { StockProvider } from '../contexts/StockContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StockProvider>
      <Component {...pageProps} />
    </StockProvider>
  );
}

export default MyApp; 