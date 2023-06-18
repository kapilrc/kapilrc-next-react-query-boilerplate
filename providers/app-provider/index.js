import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import store, { persistor } from '../../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ReactQueryProvider } from '../react-query';

export const AppProviders = (props) => {
  const { children, pageProps } = props;

  return (
    <ReduxProvider store={store}>
      <PersistGate loading="Loading..." persistor={persistor}>
        <ReactQueryProvider pageProps={pageProps}>
          {children}
        </ReactQueryProvider>
      </PersistGate>
    </ReduxProvider>
  );
};
