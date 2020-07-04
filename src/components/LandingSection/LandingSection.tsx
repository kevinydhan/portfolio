import React from 'react'
import { landingData, ctaLinks } from '../../config'
import styles from './LandingSection.module.scss'
import sharedStyles from '../../styles/modules/index.module.scss'

const LandingSection = (): JSX.Element => (
    <section className={`${sharedStyles.gridChild} ${styles.rootContainer}`}>
        <h1 className={styles.headline}>{landingData.headline}</h1>
        <p className={styles.tagline}>{landingData.tagline}</p>

        {/* Call-to-action links */}
        <div
            className={`${sharedStyles.buttonContainer} ${styles.ctaContainer}`}
        >
            {ctaLinks.map(({ text, ...linkProps }) => (
                <a
                    key={text}
                    className={sharedStyles.mediumButton}
                    {...linkProps}
                >
                    {text}
                </a>
            ))}
        </div>
    </section>
)

export default LandingSection
