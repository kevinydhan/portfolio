import { LinkFragment, LinkIconFragment, ScrollContextValue } from '$typings'

export interface BottomNavigationQueryData {
  navigation: {
    links: (LinkFragment & LinkIconFragment)[]
  }
}

export type BottomNavigationProps = BottomNavigationQueryData['navigation']

export interface BottomNavigationRootProps
  extends Pick<ScrollContextValue, 'isScrollingDown'> {
  height?: number
}
