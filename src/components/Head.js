import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import config from '@config'
import { Helmet } from 'react-helmet'

const Head = () => {
    const data = useStaticQuery(query)
    const ogImgSrc = data.file.childImageSharp.fixed.src

    return (
        <Helmet>
            {/* HTML-related head tags */}
            <link rel="canonical" href={config.siteUrl} data-react-helmet="" />

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
            <meta
                property="twitter:description"
                content={config.siteDescription}
            />
            <meta property="twitter:image" content={ogImgSrc} />
        </Helmet>
    )
}

const query = graphql`
    query getOGImage {
        file(relativePath: { eq: "og.png" }) {
            childImageSharp {
                fixed(width: 1163, height: 628) {
                    src
                }
            }
        }
    }
`

export default Head
