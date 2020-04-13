const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
    // Resolves relative file path prefixes.
    // @see https://www.gatsbyjs.org/docs/node-apis/#onCreateWebpackConfig
    actions.setWebpackConfig({
        resolve: {
            alias: {
                '@components': path.resolve(__dirname, 'src/components'),
                '@config': path.resolve(__dirname, 'src/config'),
            },
        },
    })
}
