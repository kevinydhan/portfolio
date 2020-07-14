/**
 * Resolves Sass modules in TypeScript files.
 *
 * @see https://github.com/zeit/next-plugins/issues/91#issuecomment-372089878
 * @see https://github.com/zeit/next-plugins/issues/91#issuecomment-516120965
 */
declare module '*.scss' {
    export const content: { [className: string]: string }
    export default content
}
