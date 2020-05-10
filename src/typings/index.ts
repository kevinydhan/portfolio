export type AnchorTagTargetAttribute = '_blank'

/**
 * Defines the properties for the navigation link object literal.
 */
export interface NavigationLink {
    text: string
    href: string
    target?: AnchorTagTargetAttribute
    rel?: string
}
