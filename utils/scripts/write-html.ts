import writeFile from './write-file'
import writeHTMLConfig from '../../configs/write-html.config'
import generateReactHTML from './generate-react-html'
import generateMetaTags from './generate-meta-tags'

const writeHtml = async (): Promise<void> => {
    const bodyHTML: string = generateReactHTML()
    const metaTags: string = generateMetaTags(writeHTMLConfig.metaTags)

    const config = Object.assign(
        {
            replacementRules: [
                {
                    searchValue: `<!-- Utils: generate-react-html.ts -->`,
                    replacementValue: bodyHTML,
                },
                {
                    searchValue: `<!-- Utils: generate-meta-tags.ts -->`,
                    replacementValue: metaTags,
                },
            ],
        },
        writeHTMLConfig
    )

    await writeFile(config)
}

writeHtml()
