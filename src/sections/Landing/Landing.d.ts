import type { LinkFragment } from '$typings'

export interface LandingSectionQueryData {
  section: {
    heading: string
    description: string
    ctaLinks: LinkFragment[]
  }
}

export type LandingSectionProps = LandingSectionQueryData['section']
