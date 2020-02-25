const path = require('path')

module.exports = {
    entry: path.resolve('utils', 'templates', 'index.template.html'),
    output: path.resolve('public', 'index.html'),
    metaTags: {
        title: 'Kevin Han | Software Engineer',
        author: 'Kevin Han',
        description: 'Personal portfolio',
        url: 'https://kevinhan.dev',
        imageUrl: 'static/img/undraw_personal_info_0okl.svg',
        include: {
            og: '*',
            twitter: '*',
        },
    },
}
