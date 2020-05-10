import { NavigationLink } from '../typings'

export const siteConfig = {
    authorName: 'Kevin Han',
    authorEmail: 'kevinhanyd@gmail.com',
}

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
        href: 'https://google.com',
        target: '_blank',
        rel: 'noreferrer noopener nofollow',
    },
    {
        text: 'Contact',
        href: `mailto:${siteConfig.authorEmail}`,
    },
]
