/**
 * Converts a date into ISO string format. If `date` is `undefined` or `null`,
 * this function returns the current date.
 *
 * @param date - Input date
 */
export const convertDateToISOString = (date?: Date | string | null): string => {
  if (date) return new Date(date).toISOString()
  return new Date().toISOString()
}
