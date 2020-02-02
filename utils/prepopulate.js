require('dotenv').config()
const mongoose = require('mongoose')
const fs = require('fs').promises
const path = require('path')

/**
 * This variable contains the configuration for `writeData()`.
 */
const config = {
    entry: path.resolve(__dirname, '..', 'src', 'data', 'template.ts'),
    output: {
        path: path.resolve(__dirname, '..', 'src', 'data'),
        filename: 'data.ts',
    },
}
const { entry, output } = config

/**
 * MongoDB schema for projects.
 */
const ProjectSchema = mongoose.model('project', {})

/**
 * Fetches data from MongoDB and writes
 */
const writeData = async () => {
    /**
     * Connects to MongoDB database.
     */
    await mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    /**
     * This variable contains an array of portfolio projects.
     * @type {Array<IProject>}
     */
    const projects = await ProjectSchema.find()

    /**
     * This variable contains the text of the specified entry file.
     * @type {string}
     */
    let file = await fs.readFile(entry, 'utf8')

    /**
     * This variable contains rules for modifying text from the read file using
     * `String.prototype.replace()`.
     * @type {Array<Object.<string, string>>}
     */
    const replacementRules = [
        {
            searchValue: `export const projects: Array<IProject> = []`,
            replacementValue: `export const projects: Array<IProject> =${JSON.stringify(
                projects
            )}`,
        },
    ]

    /**
     * Replaces text from the entry file using the replacement rules.
     */
    replacementRules.forEach(rule => {
        file = file.replace(rule.searchValue, rule.replacementValue)
    })

    /**
     * Writes a new data file to the specified output path.
     */
    await fs.writeFile(path.join(output.path, output.filename), file)

    mongoose.disconnect()
}

writeData()
