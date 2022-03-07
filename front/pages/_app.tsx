import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import Header from '@components/layouts/Header';
import Footer from '@components/layouts/Footer';
import { wrapper } from '../src/store';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <header>
          <Header />
        </header>
        <Component {...pageProps} />
        <Footer />
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default wrapper.withRedux(MyApp);
