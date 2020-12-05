/**
 * Defines the state for `ScrollContextProvider`.
 */
export interface ScrollContextProviderState {
  /**
   * If `true`, the user is currently scrolling down the page.
   */
  isScrollingDown: boolean
}

export type ScrollContextValue = ScrollContextProviderState
