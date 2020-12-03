import React, { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet'

import { theme } from '$theme'

import { HeadProps } from './Head.d'
import withQuery from './Head.query'

export const Head: FunctionComponent<HeadProps> = ({
  title,
  titleTemplate,
  url,
  description,
  keywords,
  type,
  ogImage,
  ogImageAlt,
  twitterCard,
}) => (
  <Helmet titleTemplate={`%s | ${titleTemplate}`}>
    {/* The below meta tags are supposed to be generated by
        `gatsby-plugin-manifest` but are not. I suspect it's due to the async
        operation inside of `gatsby-node`. */}
    <link rel="icon" href="/favicon-32x32.png" />
    <meta name="theme-color" content={theme.colors.body} />
    <meta name="background-color" content={theme.colors.background} />

    {/* General tags */}
    <title>{title}</title>
    <link rel="canonical" href={url} />
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />

    {/* Open Graph tags */}
    <meta property="og:url" content={url} />
    <meta property="og:type" content={type} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={ogImage} />
    <meta property="og:image:alt" content={ogImageAlt} />

    {/* Twitter tags */}
    <meta property="twitter:url" content={url} />
    <meta property="twitter:card" content={twitterCard} />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
  </Helmet>
)

export default withQuery(Head)
