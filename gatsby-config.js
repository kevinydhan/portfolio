const { defaultIcons } = require('gatsby-plugin-manifest/common')
require('dotenv').config()

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-ts-config',
    },
    {
      resolve: 'gatsby-plugin-sharp',
    },
    {
      resolve: 'gatsby-transformer-sharp',
    },
    {
      resolve: 'gatsby-transformer-inline-svg',
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        environment: process.env.CONTENTFUL_ENVIRONMENT,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        downloadLocal: true,
      },
    },
    {
      resolve: 'gatsby-plugin-react-helmet',
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: false,
        minify: true,
        pure: true,
        transpileTemplateLiterals: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icons: defaultIcons,
      },
    },
  ],
}
