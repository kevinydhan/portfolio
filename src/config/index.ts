/**
 * The object literals in this file are used to configure the site's components.
 */
import config from './site.config'

const sharedLinkAttributes = {
  target: '_blank',
  rel: 'noreferrer noopener nofollow',
}

const projectLink = {
  text: 'Projects',
  href: '/#projects',
}

const resumeLink = {
  ...sharedLinkAttributes,
  text: 'Resume',
  href: `https://drive.google.com/file/d/1cvFz11fSctsSGyyFaj5fHjj0w6CKfwOP/view?usp=sharing`,
}

export const navLinks = [
  {
    text: 'Home',
    href: '/#',
  },
  { ...projectLink },
  { ...resumeLink },
  {
    text: 'Contact',
    href: `mailto:${config.siteAuthorEmail}`,
  },
]

export const ctaLinks = [
  {
    ...projectLink,
    text: 'See my projects',
  },
  {
    ...resumeLink,
    text: 'View my resume',
  },
]

export const socialLinks = [
  {
    ...sharedLinkAttributes,
    text: 'LinkedIn',
    href: 'https://linkedin.com/in/kevinydhan',
  },
  {
    ...sharedLinkAttributes,
    text: 'Github',
    href: 'https://github.com/kevinydhan',
  },
  {
    ...sharedLinkAttributes,
    text: 'GitLab',
    href: 'https://gitlab.com/kevinydhan',
  },
  {
    ...sharedLinkAttributes,
    text: 'Stack Overflow',
    href: 'https://stackoverflow.com/users/11715889/khan',
  },
]

export const landingData = {
  headline: 'Helping others create their perfect website',
  tagline: `I’m a front-end developer and website designer based in New Jersey, USA. I design and build intuitive, performant websites and web applications.`,
}

export { default as projects } from './projects'
