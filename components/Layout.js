import Head from 'next/head';
import {SITE_NAME} from '../constants'
const Layout = () => {
  return (
    <div>
      <Head>
        <title>Blog App</title>
      </Head>
      <h1>{SITE_NAME}</h1>
    </div>
  )
}
export default Layout;