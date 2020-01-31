const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, '..', 'src', 'data', 'template.ts'),
    output: {
        path: path.resolve(__dirname, '..', 'src', 'data'),
        filename: 'data.ts',
    },
}
