import '@nextcss/reset'
import _layout from '../components/_layout'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import withDarkMode, { useDarkMode } from 'next-dark-mode'
import '../styles/index.scss'

const App = ({ Component, pageProps }) => {
  const { darkModeActive } = useDarkMode()

  return (
    <div className={`theme ${darkModeActive ? 'dark' : 'light'}`}>
      <_layout>
        <Head>
          <title>Мессенджер</title>
          <link rel="shortcut icon" href="/favicon.ico"/>
          <link rel="icon" type="image/png" href="/favicon.png"/>
          <link rel="stylesheet" href="/fonts/fonts.css"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>

        <Component {...pageProps} />
      </_layout>

      <style jsx>{`
        @import "../styles";

        .theme {
          min-height: 100vh;
          background: $color-background;
        }
      `}</style>
    </div>
  )
}

export default dynamic(() => Promise.resolve(withDarkMode(App)), { // todo добавить инфу про это в описание
  ssr: false,
})
