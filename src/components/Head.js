import React from 'react'
import PropTypes from 'prop-types'
import config from '@config'
import { Helmet } from 'react-helmet'

const Head = ({ ogImgSrc }) => (
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
        <meta property="og:image" content={ogImgSrc} />

        {/* Twitter meta tags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={config.siteTitle} />
        <meta property="twitter:url" content={config.siteUrl} />
        <meta property="twitter:description" content={config.siteDescription} />
        <meta property="twitter:image" content={ogImgSrc} />
    </Helmet>
)

Head.propTypes = {
    ogImgSrc: PropTypes.string.isRequired,
}

export default Head
