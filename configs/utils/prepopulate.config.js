import path from 'path'

export default {
    entry: path.join('utils', 'templates', 'data.template.ts'),
    output: path.join('src', 'data', 'data.ts'),
}
