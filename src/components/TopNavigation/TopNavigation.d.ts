import { InlineSvgFragment, LinkFragment } from '$typings'

export interface TopNavigationQueryData {
  navigation: {
    logo: InlineSvgFragment
    links: LinkFragment[]
  }
}

export interface TopNavigationProps
  extends Omit<TopNavigationQueryData['navigation'], 'logo'> {
  logo: TopNavigationQueryData['navigation']['logo']['svg']['content']
}

export interface TopNavigationRootProps {
  height?: number
}
