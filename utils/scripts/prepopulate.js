import mongoose from 'mongoose'
import writeFile from './write-file.js'
import pathConfig from '../../configs/utils/prepopulate.config.js'

/**
 * MongoDB schema for projects.
 */
const ProjectSchema = mongoose.model('project', {})

/**
 * Fetches data from MongoDB.
 *
 * @returns {Promise<mongoose.Document[]>}
 */
const fetchData = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        const projects = await ProjectSchema.find()

        mongoose.disconnect()

        return projects
    } catch (err) {
        throw new Error(err)
    }
}

/**
 *
 * @returns {Promise<void>}
 */
export default async () => {
    const projects = await fetchData()

    const config = {
        encoding: 'utf8',
        replacementRules: [
            {
                searchValue:
                    'export const projects: Array<PortfolioProject> = []',
                replacementValue: `export const projects: Array<PortfolioProject> =${JSON.stringify(
                    projects,
                    null,
                    4
                )}`,
            },
        ],
        ...pathConfig,
    }

    await writeFile(config)

    console.log(`Data successfully written to ${pathConfig.output}.\n`)
}
