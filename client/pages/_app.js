import '@nextcss/reset'
import _layout from '../components/_layout'
import Head from 'next/head'

export default function MyApp ({ Component, pageProps }) {
  return (
    <_layout>
      <Head>
        <title>Мессенджер</title>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="stylesheet" href="/fonts/fonts.css"/>
        <link rel="stylesheet" href="/styles/index.css"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>

      <Component {...pageProps} />
    </_layout>
  )
}
