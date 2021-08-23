import '@nextcss/reset'
import _layout from '../components/_layout'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const App = ({ Component, pageProps }) => {
  return (
    <_layout>
      <Head>
        <title>Мессенджер</title>
        <link rel="shortcut icon" href="/favicon.ico"/>
        <link rel="icon" type="image/png" href="/favicon.png"/>
        <link rel="stylesheet" href="/fonts/fonts.css"/>
        <link rel="stylesheet" href="/styles/index.css"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>

      <Component {...pageProps} />
    </_layout>
  )
}

export default dynamic(() => Promise.resolve(App), { // todo добавить инфу про это в описание
  ssr: false,
})
