import { rem } from 'polished'

/**
 * Creates a `box-shadow` property value.
 *
 * @example
 * createBoxShadowValue([16, 16], '#000')
 * // Returns '1rem 1rem #000'
 *
 * createBoxShadowValue([0, 4, 16, 16], 'rgba(0, 0, 0, 0.5)')
 * // Returns '0rem 0.25rem 1rem 1rem rgba(0, 0, 0, 0.5)'
 *
 * @param numericValues - [x-offset, y-offset, blur-radius?, spread-radius?]
 * @param color - Box shadow color, either as a hex, `rgb()`, or `rgba()` value
 * @param [keyword='inset']
 */
const createBoxShadowValue = (
  numericValues: [number, number, number?, number?],
  color?: string,
  keyword?: 'inset'
): string => {
  if (numericValues.length < 2) return ''
  const values = numericValues.map((value) => rem(value))
  return [...values, color, keyword].filter((e) => e).join(' ')
}

export default createBoxShadowValue
