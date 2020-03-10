import writeFile from './write-file'
import writeHTMLConfig from '../../configs/utils/write-html.config'
import generateReactHTML from './generate-react-html'

const writeHtml = async (): Promise<void> => {
    const bodyHTML: string = generateReactHTML()

    const config = Object.assign(
        {
            replacementRules: [
                {
                    searchValue: `<!-- Utils: generate-react-html.ts -->`,
                    replacementValue: bodyHTML,
                },
                {
                    searchValue: `<!-- Utils: generate-meta-tags.ts -->`,
                    replacementValue: '',
                },
            ],
        },
        writeHTMLConfig
    )

    await writeFile(config)
}

writeHtml()
