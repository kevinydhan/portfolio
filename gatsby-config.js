/* eslint @typescript-eslint/camelcase: 0 */
const path = require('path')
const config = require('./src/config/site.config')

module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                transpileOnly: false,
                compilerOptions: {
                    target: 'es2015',
                    jsx: 'react',
                },
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: path.join(__dirname, 'src', 'images'),
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: config.siteTitle,
                short_name: config.siteTitle,
                description: config.siteDescription,
                start_url: config.siteStartUrl,
                background_color: config.siteBackgroundColor,
                theme_color: config.siteThemeColor,
                display: `standalone`,
                icon: 'src/images/icon.png',
            },
        },
        {
            resolve: 'gatsby-plugin-html-attributes',
            options: {
                lang: 'en',
            },
        },
        'gatsby-plugin-robots-txt',
        'gatsby-plugin-offline',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-sass',
        'gatsby-plugin-minify-classnames',
    ],
    siteMetadata: {
        title: config.siteTitle,
        author: config.siteAuthor,
        siteUrl: config.siteUrl,
        description: config.siteDescription,
    },
}
