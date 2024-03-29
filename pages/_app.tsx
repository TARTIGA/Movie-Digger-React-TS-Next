import { useEffect } from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import { GlobalStyleReset } from "../styles/globalStyles"
import { SITE_NAME } from "../constants"
import { Normalize } from "styled-normalize"
import App from "next/app"

export const MyApp = ({ Component, pageProps }) => {
  const { pathname } = useRouter()
  const lang = pathname.startsWith("/en") ? "en" : "ru"
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={SITE_NAME} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=5, viewport-fit=cover"
        />
        <link
          rel="preload"
          href="/fonts/Roboto-Regular.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <GlobalStyleReset />
      <Normalize />
      <Component {...pageProps} />
    </>
  )
}
MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)

  return { ...appProps }
}

export default MyApp
