import React from 'react'
import { navLinks, socialLinks } from '../../config'
import siteConfig from '../../config/site.config'
import styles from './Footer.module.scss'

const Footer = (): JSX.Element => (
    <footer className={styles.footer}>
        <div className={styles.footerInnerContainer}>
            <div className={styles.footerListsOuterContainer}>
                <div className={styles.footerListContainer}>
                    <h3 className={styles.footerListHeading}>Menu</h3>
                    <ul className={styles.footerList}>
                        {navLinks
                            .filter((link) => link.text !== 'Contact')
                            .map(({ text, ...linkProps }) => (
                                <li key={text}>
                                    <a {...linkProps}>{text}</a>
                                </li>
                            ))}
                    </ul>
                </div>

                <div className={styles.footerListContainer}>
                    <h3 className={styles.footerListHeading}>Socials</h3>
                    <ul className={styles.footerList}>
                        {socialLinks.map((link) => (
                            <li key={link.type}>
                                <a
                                    href={link.href}
                                    rel={link.rel}
                                    target={link.target}
                                >
                                    {link['aria-label']}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.footerListContainer}>
                    <h3 className={styles.footerListHeading}>Contact</h3>
                    <ul className={styles.footerList}>
                        <li>
                            <a href={`mailto:${siteConfig.siteAuthorEmail}`}>
                                {siteConfig.siteAuthorEmail}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <p>Copyright © 2020 {siteConfig.siteAuthor}</p>
        </div>
    </footer>
)
export default Footer
