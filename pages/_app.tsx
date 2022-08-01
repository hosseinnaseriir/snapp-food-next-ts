import * as React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux'
import { Layout } from 'components';
import { store } from 'redux/store';
import './../public/css/global.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
