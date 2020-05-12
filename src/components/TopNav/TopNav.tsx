import React from 'react'
import { navLinks } from '../../config'
import siteConfig from '../../config/site.config'
import styles from './TopNav.module.scss'

const TopNav = (): JSX.Element => (
    <header className={styles.header}>
        <nav className={styles.nav}>
            <a className={styles.logo} href="/">
                {siteConfig.siteAuthor}
            </a>
            <ul className={styles.navLinks}>
                {navLinks.map(({ text, ...linkProps }) => (
                    <li className={styles.navLinkContainer} key={text}>
                        <a className={styles.navLink} {...linkProps}>
                            {text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
)

export default TopNav
