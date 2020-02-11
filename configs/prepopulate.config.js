const path = require('path')

module.exports = {
    entry: path.resolve('utils', 'templates', 'data.template.ts'),
    output: path.resolve('src', 'data', 'data.ts'),
}
