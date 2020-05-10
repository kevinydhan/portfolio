import React from 'react'
import NavLinks from '../NavLinks/NavLinks'
import { siteConfig } from '../../config'
import styles from './TopNav.module.scss'

const TopNav = (): JSX.Element => (
    <header className={styles.header}>
        <a className={styles.logo} href="/">
            {siteConfig.authorName}
        </a>
        <NavLinks />
    </header>
)

export default TopNav
