import * as React from 'react';
import Head from 'next/head';
import { Home } from 'screens';

export default function Index() {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/snapp-food.png" />
        <title>snapp food next Example</title>
      </Head>
      <Home />
    </>

  );
}
