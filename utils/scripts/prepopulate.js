const mongoose = require('mongoose')
const writeFile = require('./write-file')
const pathConfig = require('../../configs/prepopulate.config')

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
    await mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    const projects = await ProjectSchema.find()

    mongoose.disconnect()

    return projects
}

/**
 *
 * @returns {Promise<void>}
 */
module.exports = async () => {
    const projects = await fetchData()

    const config = Object.assign(
        {
            encoding: 'utf8',
            replacementRules: [
                {
                    searchValue: `export const projects: Array<IProject> = []`,
                    replacementValue: `export const projects: Array<IProject> =${JSON.stringify(
                        projects,
                        null,
                        4
                    )}`,
                },
            ],
        },
        pathConfig
    )

    await writeFile(config)
}
