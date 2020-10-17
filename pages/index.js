import { useEffect } from "react"
import Head from "next/head"
import { SITE_NAME } from "../constants"
const Home = () => {
  useEffect(() => {
    console.log(["test", test])
  }, [])
  return (
    <div>
      <Head>
        <title>{SITE_NAME}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={SITE_NAME} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <h1>{SITE_NAME}</h1>
    </div>
  )
}
export default Home
