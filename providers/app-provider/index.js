import React from 'react';
import { ReactQueryProvider } from '../react-query';

export const AppProviders = (props) => {
  const { children, pageProps } = props;

  return (
    <ReactQueryProvider pageProps={pageProps}>{children}</ReactQueryProvider>
  );
};
