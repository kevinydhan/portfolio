import React from 'react'
import { siteConfig, navLinks } from '../../config'
import styles from './TopNav.module.scss'

const TopNav = (): JSX.Element => (
    <header className={styles.header}>
        <nav className={styles.nav}>
            <a className={styles.logo} href="/">
                {siteConfig.authorName}
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
