export {
  ReactChildrenPropType,
  GenericLinkPropType,
  GatsbyImageSharpFluidPropType,
} from './prop-types'
export { useProjectDataQuery } from './hooks'

/**
 * Creates a comma-separated list with the conjunction "and" before the last
 * word.
 *
 * @todo
 * - Handle the case for no words in the list
 * - Handle the case for 1 word in the list
 * - Handle the case for 2 words in the list
 *
 * @example
 * sentencize(['oranges', 'apples', 'bananas'])
 * // oranges, apples, and bananas
 *
 * @param {string[]} words - Array of words
 *
 * @returns {string} - Comma-separated list
 */
export const sentencize = (words: string[]): string => {
  let sentence = ''

  words.forEach((word: string, i: number) => {
    if (i === 0) sentence += word
    else if (i === words.length - 1) sentence += `, and ${word}`
    else sentence += `, ${word}`
  })

  return sentence
}
