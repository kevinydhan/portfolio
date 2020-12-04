import { ContentfulFixedImageFragment } from '$typings'

/**
 * @__typename `ContentfulMetadata`
 * @fragment `Metadata`
 */
export interface MetadataFragment {
  /**
   * References the following values:
   * ```tsx
   * <link rel="canonical" href={Metadata.url}>
   * <meta property="og:url" content={Metadata.url}>
   * <meta property="twitter:url" content={Metadata.url}>
   * ```
   */
  url: string

  /**
   * References the following values:
   * ```tsx
   * <meta property="og:type" content={Metadata.type}>
   * ```
   */
  type: string

  /**
   * References the following values:
   * ```tsx
   * <title>{Metadata.title}</title>
   * <meta property="og:title" content={Metadata.title}>
   * <meta property="twitter:title" content={Metadata.title}>
   * ```
   */
  title: string

  /**
   * References the following values:
   * ```tsx
   * <title>{Metadata.title} | {Metadata.titleTemplate}</title>
   * ```
   */
  titleTemplate: string

  /**
   * References the following values:
   * ```tsx
   * <meta name="description" content={Metadata.description}>
   * <meta property="og:description" content={Metadata.description}>
   * <meta property="twitter:description" content={Metadata.description}>
   * ```
   */
  description: string

  /**
   * References the following values:
   * ```tsx
   * <meta name="keywords" content={Metadata.keywords}>
   * ```
   */
  keywords: string

  /**
   * References the following values:
   * ```tsx
   * <meta property="og:image">
   * ```
   */
  ogImage: ContentfulFixedImageFragment

  /**
   * References the following values:
   * ```tsx
   * <meta property="twitter:card" content={Metadata.twitterCard}>
   * ```
   */
  twitterCard: string
}
