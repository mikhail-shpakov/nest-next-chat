const path = require('path')

module.exports = {
  presets: [
    [
      'next/babel',
      {
        'styled-jsx': {
          plugins: [
            ['@styled-jsx/plugin-sass', {
              sassOptions: {
                includePaths: [path.resolve(__dirname, 'styles')],
                prependData: `@import "_variables.scss";`
              },
            }]
          ]
        }
      }
    ]
  ]
}
