const withPWA = require('next-pwa')
const { i18n } = require('./next-i18next.config')

module.exports = withPWA({
  images: {
    domains: ['lh3.googleusercontent.com'], // todo проверить какие домены могут быть использованы
  },
  pwa: {
    dest: 'public'
  },
  i18n,
})
