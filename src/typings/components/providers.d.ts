import { ScrollContextProvider } from '$components'

/**
 * Defines the state for `ScrollContextProvider`.
 */
export interface ScrollContextProviderState {
  /**
   * If `true`, the user is currently scrolling down the page.
   */
  isScrollingDown: boolean
}

export interface ScrollContextValue
  extends ScrollContextProviderState,
    Pick<ScrollContextProvider, 'observeElement'> {}
