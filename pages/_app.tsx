import Head from 'next/head';
import { SITE_NAME } from "../constants"

export const App = ({ Component, pageProps }) =>  {
  return (
    <>
      <Head>
          <title>{SITE_NAME}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content={SITE_NAME} />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,700&display=swap"
            rel="stylesheet"
          />
        </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
