import { InlineSvgFragment, LinkFragment, ScrollContextValue } from '$typings'

export interface TopNavigationQueryData {
  navigation: {
    logo: InlineSvgFragment
    links: LinkFragment[]
  }
}

export interface TopNavigationProps
  extends Omit<TopNavigationQueryData['navigation'], 'logo'> {
  logoDescription: TopNavigationQueryData['navigation']['logo']['description']
  logoSrc: TopNavigationQueryData['navigation']['logo']['svg']['dataURI']
}

export interface TopNavigationRootProps
  extends Pick<ScrollContextValue, 'isScrollingDown'> {
  height?: number
}
