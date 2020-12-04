/**
 * @__typename `ImageSharp`
 */
interface FluidImageSharpFragment {
  fluid: {
    src: string
    srcSet: string
    sizes: string
  }
}

/**
 * @__typename `ImageSharp`
 */
interface FixedImageSharpFragment {
  fixed: {
    src: string
    srcSet: string
  }
}

/**
 * Defines an object literal containing image-related data sourced from
 * Contentful and the `sharp` package.
 * @template ImageSharp - Object literal derived from the `ImageSharp` GraphQL
 * `__typename`
 */
interface ContentfulImageFragment<ImageSharp> {
  /**
   * References the image's description. This value should be used as the `alt`
   * attribute for the image.
   */
  description: string
  localFile: {
    childImageSharp: ImageSharp
  }
}

/**
 * @__typename `ContentfulAsset`
 */
export type ContentfulFluidImageFragment = ContentfulImageFragment<FluidImageSharpFragment>

/**
 * @__typename `ContentfulAsset`
 */
export type ContentfulFixedImageFragment = ContentfulImageFragment<FixedImageSharpFragment>

/**
 * @__typename `ContentfulAsset`
 * @fragment `InlineSvg`
 */
export interface InlineSvgFragment {
  svg: {
    /**
     * Defines a string containing an `<svg>` element.
     */
    content: string
  }
}
