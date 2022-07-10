import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import Layout from '../src/components/Layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
