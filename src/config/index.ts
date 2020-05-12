import { NavigationLink, SocialLink } from '../typings'
import config from './site.config'

export const navLinks: NavigationLink[] = [
    {
        text: 'Home',
        href: '/',
    },
    {
        text: 'Projects',
        href: '/projects',
    },
    {
        text: 'Resume',
        href:
            'https://drive.google.com/file/d/1cvFz11fSctsSGyyFaj5fHjj0w6CKfwOP/view?usp=sharing',
        target: '_blank',
        rel: 'noreferrer noopener nofollow',
    },
    {
        text: 'Contact',
        href: `mailto:${config.siteAuthorEmail}`,
    },
]

export const socialLinks: SocialLink[] = [
    {
        type: 'linkedin',
        href: 'https://linkedin.com/in/kevinydhan',
        target: '_blank',
        rel: 'noreferrer noopener nofollow',
        'aria-label': 'LinkedIn',
    },
    {
        type: 'github',
        href: 'https://github.com/kevinydhan',
        target: '_blank',
        rel: 'noreferrer noopener nofollow',
        'aria-label': 'Github',
    },
    {
        type: 'gitlab',
        href: 'https://gitlab.com/kevinydhan',
        target: '_blank',
        rel: 'noreferrer noopener nofollow',
        'aria-label': 'GitLab',
    },
    {
        type: 'stackoverflow',
        href: 'https://stackoverflow.com/users/11715889/khan',
        target: '_blank',
        rel: 'noreferrer noopener nofollow',
        'aria-label': 'Stack Overflow',
    },
]
