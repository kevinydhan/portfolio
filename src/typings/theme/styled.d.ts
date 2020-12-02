import { theme } from '$theme'

declare module 'styled-components' {
  type LocalTheme = typeof theme

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export default interface DefaultTheme extends LocalTheme {}
}
