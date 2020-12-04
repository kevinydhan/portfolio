import { theme } from '$theme'

export interface CreateMediaQueryOptions {
  minWidthKey?: keyof typeof theme['breakpoints']
  maxWidthKey?: keyof typeof theme['breakpoints']
}
