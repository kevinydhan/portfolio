const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
    // Resolves relative file path prefixes.
    // @see https://www.gatsbyjs.org/docs/node-apis/#onCreateWebpackConfig
    actions.setWebpackConfig({
        resolve: {
            alias: {
                // Contains whole-piece components.
                '@components': path.resolve(__dirname, 'src/components'),

                // Contains the site's configuration.
                '@config': path.resolve(__dirname, 'src/config'),

                // Contains the site content.
                '@content': path.resolve(__dirname, 'content'),

                // Contains the site's images.
                '@images': path.resolve(__dirname, 'src/images'),

                // Contains `styled-components`-related configurations, the
                // global style component, and singular, multi-use components.
                '@theme': path.resolve(__dirname, 'src/theme'),

                // Contains components that render full sectional views.
                '@views': path.resolve(__dirname, 'src/views'),

                // Contains helper functions.
                '@utils': path.resolve(__dirname, 'src/utils'),
            },
        },
    })
}
