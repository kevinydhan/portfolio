const config = require('./src/config')

module.exports = {
    plugins: [
        // @see https://github.com/nfl/react-helmet
        // @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-react-helmet
        'gatsby-plugin-react-helmet',

        // @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-manifest
        // @see https://web.dev/add-manifest/#create
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Kevin Han's Personal Developer Portfolio`,
                short_name: `Kevin Han's Portfolio`,
                description: `Personal portfolio displaying Kevin Han's developer experience and projects`,
                start_url: `/`,
                background_color: `#000`,
                theme_color: `#fff`,
                display: `standalone`,
            },
        },
    ],
    siteMetadata: {
        title: config.siteTitle,
        author: config.siteAuthor,
        description: config.siteDescription,
    },
}
