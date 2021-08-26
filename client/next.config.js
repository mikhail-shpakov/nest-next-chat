const withPWA = require('next-pwa')

module.exports = withPWA({
  images: {
    domains: ['lh3.googleusercontent.com'], // todo проверить какие домены могут быть использованы
  },
  pwa: {
    dest: 'public'
  },
})
