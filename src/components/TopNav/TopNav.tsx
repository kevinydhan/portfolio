import React from 'react'
import Logo from '../Logo'
import { navLinks } from '../../config'
import styles from './TopNav.module.scss'
import sharedStyles from '../../styles/modules/index.module.scss'

const TopNav = (): JSX.Element => (
    <header className={`${sharedStyles.grid} ${styles.header}`}>
        <nav className={`${sharedStyles.gridChild} ${styles.nav}`}>
            <a href="/#" className={styles.logo}>
                <Logo />
            </a>
            <ul className={styles.navLinkList}>
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
