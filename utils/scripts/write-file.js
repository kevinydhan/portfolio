import fs from 'fs'

/**
 * Reads a specified template file, modifies the data within the template file
 * using the replacement rules, and writes a new file with modifications to the
 * specified destination path. This function does not mutate the template file.
 *
 * @param {string} config.entry - Entry file path of file template
 * @param {string} config.output - Destination path of output file
 * @param {string} config.encoding - Buffer encoding
 * @param {Array<Object>} config.replacementRules - Set of rules instructing the script to replace
 *
 * @returns {Promise<void>}
 */
export default async (config) => {
    /**
     * @TODO
     * - Write checks and error handlers for arguments
     */
    const { entry, output, replacementRules } = config
    const encoding = config.encoding ? config.encoding : 'utf8'

    let file = await fs.promises.readFile(entry, encoding)

    /**
     * @example
     * const replacementRules = [
     *
     * ]
     */
    replacementRules.forEach((rule) => {
        file = file.replace(rule.searchValue, rule.replacementValue)
    })

    await fs.promises.writeFile(output, file)
}
