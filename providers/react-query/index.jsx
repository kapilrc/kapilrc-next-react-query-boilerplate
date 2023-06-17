import React from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClientProvider, QueryClient, Hydrate } from 'react-query';

export const ReactQueryProvider = ({ children, pageProps }) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ReactQueryDevtools initialIsOpen={false} />
        {children}
      </Hydrate>
    </QueryClientProvider>
  );
};
