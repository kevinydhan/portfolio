import React from 'react'
import PropTypes from 'prop-types'
import siteConfig from '../config/site.config'
import { Helmet } from 'react-helmet'

const Head = ({ title }): JSX.Element => (
    <Helmet>
        {/* HTML-related head tags */}
        <link rel="canonical" href={siteConfig.siteUrl} />

        {/* General meta tags */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={siteConfig.siteDescription} />
        <meta name="keywords" content={siteConfig.siteKeywords} />

        {/* Open Graph/Facebook meta tags */}
        <meta property="og:type" content={siteConfig.siteType} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={siteConfig.siteUrl} />
        <meta property="og:description" content={siteConfig.siteDescription} />
        <meta property="og:locale" content={siteConfig.siteLanguage} />
        {/* <meta property="og:image" content={ogImgSrc} /> */}

        {/* Twitter meta tags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:url" content={siteConfig.siteUrl} />
        <meta
            property="twitter:description"
            content={siteConfig.siteDescription}
        />
        {/* <meta property="twitter:image" content={ogImgSrc} /> */}
    </Helmet>
)

Head.defaultProps = {
    title: siteConfig.siteTitle,
}

Head.propTypes = {
    title: PropTypes.string,
}

export default Head
