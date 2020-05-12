/* eslint @typescript-eslint/camelcase: 0 */

const path = require('path')

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
                name: '',
                short_name: `Kevin Han's Portfolio`,
                description: '',
                start_url: `/`,
                background_color: `#161616`,
                theme_color: `#161616`,
                display: `standalone`,
                icon: 'src/images/icon.png',
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-sass',
    ],
}
