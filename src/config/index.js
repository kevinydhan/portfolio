module.exports = {
    /**
     * Defines the site's types.
     *
     * This property is used by the following:
     * - `<meta property="og:type">`
     */
    siteType: 'website',

    /**
     * Defines the site's title.
     *
     * This property is used by the following:
     * - `<meta property="title">`
     * - `<meta property="og:title">`
     * - `<meta property="twitter:title">`
     */
    siteTitle: 'Kevin Han | Software Engineer',

    /**
     * Defines the site's url.
     *
     * This property is used by the following:
     * - `<meta property="og:url">`
     * - `<meta property="twitter:url">`
     */
    siteUrl: 'https://kevinhan.dev',

    /**
     * Defines the site's description.
     *
     * This property is used by the following:
     * - `<meta property="og:description">`
     * - `<meta property="twitter:description">`
     */
    siteDescription: `Personal portfolio displaying Kevin Han's developer experience and projects`,

    /**
     *
     */
    siteAuthor: 'Kevin Han',

    /**
     *
     */
    siteLanguage: 'en_US',

    /**
     *
     */
    siteKeywords: [
        // Personal keywords
        'Kevin Han',
        'Kevin',
        'Han',
        'kevinydhan',

        // Job-related keywords
        'software engineer',
        'front-end developer',
        'web developer',

        // Skill-related keywords
        'javascript',
        'react',
    ].join(', '),

    /**
     *
     */
    navLinks: [
        { name: 'Experience', href: '/#experience' },
        { name: 'Projects', href: '/#projects' },
    ],

    /**
     *
     */
    socialLinks: {
        linkedin: 'https://linkedin.com/in/kevinydhan',
        github: 'https://github.com/kevinydhan',
        gitlab: 'https://gitlab.com/kevinydhan',
        stackoverflow: 'https://stackoverflow.com/users/11715889/khan',
    },
}
