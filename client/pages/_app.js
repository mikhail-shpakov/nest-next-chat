import '@nextcss/reset'
import _layout from './_layout'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import '../styles/index.scss'
import { appWithTranslation, useTranslation } from 'next-i18next'

const App = ({ Component, pageProps }) => {
  const { t } = useTranslation('common')

  return (
    <div className={'main'}>
      <_layout>
        <Head>
          <title>{t('title')}</title>
          <link rel="stylesheet" href="/fonts/fonts.css"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>

        <Component {...pageProps} />
      </_layout>

      <style jsx>{`
        @import "../styles";

        .main {
          min-height: 100vh;
          background: $color-background;
        }
      `}</style>
    </div>
  )
}

export default dynamic(() => Promise.resolve(appWithTranslation(App)), { // todo добавить инфу про это в описание
  ssr: false,
})
