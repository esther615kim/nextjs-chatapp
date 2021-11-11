import '../styles/login.css';
import { ContextProvider } from './api/context';

export default function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      < Component {...pageProps} />
    </ContextProvider>
  )
}
