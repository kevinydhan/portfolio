const fs = require('fs').promises

/**
 * Reads a specified template file, uses
 *
 * @param {Object} config - Object literal containing configurations for the
 *                          function
 *
 * @param {string} config.entry - Entry file path of file template
 * @param {string} config.output - Destination path of output file
 * @param {string} config.encoding - Buffer encoding
 * @param {Array<Object>} config.replacementRules - Set of rules instructing the script to replace
 *
 * @returns {Promise<void>}
 */
module.exports = async config => {
    /**
     * @TODO
     * - Write checks and error handlers for arguments
     */
    const { entry, output, encoding, replacementRules } = config

    let file = await fs.readFile(entry, encoding)

    replacementRules.forEach(rule => {
        file = file.replace(rule.searchValue, rule.replacementValue)
    })

    await fs.writeFile(output, file)
}
