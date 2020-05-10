/**
 * Resolves Sass modules in TypeScript files.
 *
 * @see https://github.com/zeit/next-plugins/issues/91#issuecomment-372089878
 */
declare module '*.scss' {
    const content: { [className: string]: string }
    export = content
}
