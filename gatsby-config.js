const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Dennis Moes Portfolio`,
    siteUrl: `https://www.dennismoes.com`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/code.png'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
}
