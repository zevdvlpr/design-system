import { AppProps } from 'next/app';

import ThemeContainer from '../context/themes/ThemeContainer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContainer>
      <Component {...pageProps} />
    </ThemeContainer>
  );
}
