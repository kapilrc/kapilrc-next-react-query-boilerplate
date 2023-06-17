import { AppProviders } from '../providers/app-provider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <AppProviders pageProps={pageProps}>
      <Component {...pageProps} />
    </AppProviders>
  );
}

export default MyApp;
