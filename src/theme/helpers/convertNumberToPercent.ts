/**
 * Converts a number into a percentage value.
 *
 * @example
 * convertNumberToPercent(0.5) // '50%'
 * convertNumberToPercent(1) // '100%'
 *
 * @param number
 */
const convertNumberToPercent = (number: number): string => `${number * 100}%`

export default convertNumberToPercent
