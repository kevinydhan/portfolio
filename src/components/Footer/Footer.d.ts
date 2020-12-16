import type { LinkFragment } from '$typings'

export interface FooterQueryData {
  navigation: {
    heading: string
    socialLinks: LinkFragment[]
  }
}

export type FooterProps = FooterQueryData['navigation']
