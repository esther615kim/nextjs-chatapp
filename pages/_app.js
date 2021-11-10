import '../styles/globals.css'
import "../styles/auth.css";
import "../styles/chats.css";
import { ContextProvider } from './api/context';

export default function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      < Component {...pageProps} />
    </ContextProvider>
  )
}
