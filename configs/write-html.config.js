const path = require('path')

module.exports = {
    entry: path.resolve('utils', 'templates', 'index.template.html'),
    output: path.resolve('public', 'index.html'),
}
