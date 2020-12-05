import {
  LinkFragment,
  LinkIconFragment,
  ScrollContextProviderState,
} from '$typings'

export interface BottomNavigationQueryData {
  navigation: {
    links: (LinkFragment & LinkIconFragment)[]
  }
}

export type BottomNavigationProps = BottomNavigationQueryData['navigation']

export interface BottomNavigationRootProps
  extends Pick<ScrollContextProviderState, 'isScrollingDown'> {
  height?: number
}
