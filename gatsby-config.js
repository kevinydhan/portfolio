const config = require('./src/config')
const path = require('path')

module.exports = {
    plugins: [
        // @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-manifest
        // @see https://web.dev/add-manifest/#create
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Kevin Han's Personal Developer Portfolio`,
                short_name: `Kevin Han's Portfolio`,
                description: config.siteDescription,
                start_url: `/`,
                background_color: `#161616`,
                theme_color: `#161616`,
                display: `standalone`,
                icon: 'src/images/icon.png',
            },
        },

        // @see https://www.gatsbyjs.org/packages/gatsby-image/#install
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: path.join(__dirname, 'src', 'images'),
            },
        },

        {
            resolve: 'gatsby-plugin-html-attributes',
            options: {
                lang: 'en',
            },
        },

        // @see https://www.gatsbyjs.org/packages/gatsby-plugin-offline
        'gatsby-plugin-offline',

        // @see https://www.gatsbyjs.org/packages/gatsby-plugin-sharp
        'gatsby-plugin-sharp',

        // @see https://www.gatsbyjs.org/packages/gatsby-transformer-sharp
        'gatsby-transformer-sharp',

        // @see https://www.gatsbyjs.org/packages/gatsby-plugin-robots-txt
        'gatsby-plugin-robots-txt',

        // @see https://github.com/nfl/react-helmet
        // @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-react-helmet
        'gatsby-plugin-react-helmet',

        // @see https://www.gatsbyjs.org/docs/styled-components
        'gatsby-plugin-styled-components',
    ],
    siteMetadata: {
        title: config.siteTitle,
        author: config.siteAuthor,
        siteUrl: config.siteUrl,
        description: config.siteDescription,
    },
}
