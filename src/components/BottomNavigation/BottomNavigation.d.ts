import { LinkFragment, LinkIconFragment } from '$typings'

export interface BottomNavigationQueryData {
  navigation: {
    links: (LinkFragment & LinkIconFragment)[]
  }
}

export type BottomNavigationProps = BottomNavigationQueryData['navigation']

export interface BottomNavigationRootProps {
  height?: number
}
