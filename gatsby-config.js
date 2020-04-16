const config = require('./src/config')
const path = require('path')

module.exports = {
    plugins: [
        // @see https://github.com/nfl/react-helmet
        // @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-react-helmet
        'gatsby-plugin-react-helmet',

        // @see https://www.gatsbyjs.org/docs/styled-components/
        'gatsby-plugin-styled-components',

        // @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-manifest
        // @see https://web.dev/add-manifest/#create
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Kevin Han's Personal Developer Portfolio`,
                short_name: `Kevin Han's Portfolio`,
                description: config.siteDescription,
                start_url: `/`,
                background_color: `#000`,
                theme_color: `#fff`,
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
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
    ],
    siteMetadata: {
        title: config.siteTitle,
        author: config.siteAuthor,
        siteUrl: config.siteUrl,
        description: config.siteDescription,
    },
}
