module.exports = {
    // Defines the site's types.
    siteType: 'website',

    // Defines the site's title.
    siteTitle: 'Kevin Han | Software Engineer',

    /**
     *
     * This property is used by:
     * - `gatsby-plugin-robots-txt`
     */
    siteUrl: 'https://kevinhan.dev',

    /**
     * Defines the site's description.
     *
     * This property is used by the following:
     * - `<meta property="og:description">`
     * - `<meta property="twitter:description">`
     */
    siteDescription:
        'Kevin Han is a full-stack developer based in New Jersey, USA. He creates simplistic yet intuitive websites and web applications.',

    siteAuthor: 'Kevin Han',

    siteLanguage: 'en_US',

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
     * Defines the navigation links on your website. This property is used by
     * the `Navbar` component to render out the navigation links.
     */
    navLinks: [
        {
            name: 'Home',
            href: '#',
        },
        {
            name: 'Projects',
            href: '/#projects',
        },
        {
            name: 'Resume',
            href:
                'https://drive.google.com/file/d/1cvFz11fSctsSGyyFaj5fHjj0w6CKfwOP/view?usp=sharing',
        },
        {
            name: 'Contact',
            href: 'mailto:kevinhanyd@gmail.com',
        },
    ],

    socialLinks: {
        linkedin: 'https://linkedin.com/in/kevinydhan',
        github: 'https://github.com/kevinydhan',
        gitlab: 'https://gitlab.com/kevinydhan',
        stackoverflow: 'https://stackoverflow.com/users/11715889/khan',
    },
}
