import React from 'react'
import { navLinks } from '../../config'
import HomeIcon from '../_icons/HomeIcon'
import FolderIcon from '../_icons/FolderIcon'
import PagesIcon from '../_icons/PagesIcon'
import MailIcon from '../_icons/MailIcon'
import styles from './NavLinks.module.scss'

const iconMap = {
    Home: <HomeIcon />,
    Projects: <FolderIcon />,
    Resume: <PagesIcon />,
    Contact: <MailIcon />,
}

const NavLinks = (): JSX.Element => (
    <nav className={styles.nav}>
        <ul className={styles.navLinks}>
            {navLinks.map(({ text, ...linkProps }) => (
                <li className={styles.navLinkContainer} key={text}>
                    <a className={styles.navLink} {...linkProps}>
                        {iconMap[text]}
                        {text}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
)

export default NavLinks
