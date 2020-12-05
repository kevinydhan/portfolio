import { InlineSvgFragment } from '$typings'

/**
 * @__typename `ContentfulLink`
 * @fragment `Link`
 */
export interface LinkFragment {
  id: string
  name: string

  /**
   * References the `<a href="">` attribute.
   * @example 'https://github.com'
   */
  href: string

  /**
   * References the `<a target="">` attribute.
   * @example '_blank'
   */
  target: string | null

  /**
   * References the `<a rel="">` attribute.
   * @example 'noreferrer noopener'
   */
  rel: string | null
  innerText: {
    /**
     * References the inner text for the `<a>` element.
     */
    text: string
  }
}

/**
 * @__typename `ContentfulLink`
 * @fragment `LinkIcon`
 */
export interface LinkIconFragment {
  icon: InlineSvgFragment
}
