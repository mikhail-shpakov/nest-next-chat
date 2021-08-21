import '@nextcss/reset'
import Layout from '../components/layout'
import Head from 'next/head'

export default function MyApp ({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Мессенджер</title>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="stylesheet" href="/fonts/fonts.css"/>
        <link rel="stylesheet" href="/styles/index.css"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>

      <Component {...pageProps} />
    </Layout>
  )
}
