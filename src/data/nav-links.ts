/**
 * Defines the navigation link object's properties.
 */
export interface NavLink {
    id: string
    href: string
    name: string
}

const navLinks: Array<NavLink> = [
    { id: 'experience', href: '#experience', name: 'Experience' },
    { id: 'projects', href: '#projects', name: 'Projects' },
    { id: 'resume', href: '#', name: 'Resume' },
    { id: 'contact', href: '#', name: 'Contact' },
]

export default navLinks
