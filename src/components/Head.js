import React from 'react'
import config from '@config'
import { Helmet } from 'react-helmet'

/**
 * Generates the `<head>` tag.
 */
const Head = () => (
    <Helmet>
        {/* HTML-related head tags */}
        <link rel="canonical" href={config.siteUrl} />

        {/* General meta tags */}
        <title>{config.siteTitle}</title>
        <meta name="title" content={config.siteTitle} />
        <meta name="description" content={config.siteDescription} />
        <meta name="keywords" content={config.siteKeywords} />

        {/* Open Graph/Facebook meta tags */}
        <meta property="og:type" content={config.siteType} />
        <meta property="og:title" content={config.siteTitle} />
        <meta property="og:url" content={config.siteUrl} />
        <meta property="og:description" content={config.siteDescription} />
        <meta property="og:locale" content={config.siteLanguage} />

        {/* Twitter meta tags */}
        <meta property="twitter:title" content={config.siteTitle} />
        <meta property="twitter:url" content={config.siteUrl} />
        <meta property="twitter:description" content={config.siteDescription} />
    </Helmet>
)

export default Head
