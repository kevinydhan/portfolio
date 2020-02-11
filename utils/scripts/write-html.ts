import React from 'react'
import { renderToString } from 'react-dom/server'
import { App } from '../../src/App'
import writeFile from './write-file'
import pathConfig from '../../configs/write-html.config'

const writeHtml = async (): Promise<void> => {
    const html = renderToString(React.createElement(App))

    const config = Object.assign(
        {
            encoding: 'utf8',
            replacementRules: [
                {
                    searchValue: `<!-- Replace this line with the HTML from React. -->`,
                    replacementValue: html,
                },
            ],
        },
        pathConfig
    )

    await writeFile(config)
}

writeHtml()
