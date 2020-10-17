import Head from 'next/head';
// import App from 'next/app'
import { SITE_NAME } from "../constants"

export const MyApp = ({ Component, pageProps }) =>  {
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
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp
