import Document, { Head, Html, Main, NextScript } from 'next/document'

const appName = 'Мессенджер'
const appDescription = 'Онлайн чат, созданный с помощью Nest, Next и Socket.io'

export default class extends Document {
  static async getInitialProps (ctx) {
    return await Document.getInitialProps(ctx)
  }

  render () {
    return (
      <Html>
        <Head>
          <meta name="application-name" content={appName}/>
          <meta name="apple-mobile-web-app-capable" content="yes"/>
          <meta name="apple-mobile-web-app-status-bar-style" content="default"/>
          <meta name="apple-mobile-web-app-title" content={appName}/>
          <meta name="description" content={appDescription}/>
          <meta name="format-detection" content="telephone=no"/>
          <meta name="mobile-web-app-capable" content="yes"/>
          <meta name="theme-color" content="#FFFFFF"/>

          <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-180.png"/>
          <link rel="manifest" href="/manifest.json"/>
          <link rel="shortcut icon" href="/favicon.ico"/>
          <link rel="icon" type="image/png" href="/favicon.png"/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}
