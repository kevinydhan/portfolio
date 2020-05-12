import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout'
import { Head, LandingBackground, IconContainer } from '../components'
import '../theme/global.scss'
import styles from '../theme/pages/index.module.scss'
import { socialLinks } from '../config'

const LandingPage = (): JSX.Element => (
    <>
        <Head />
        <LandingBackground />
        <DefaultLayout additionalClassNames={styles.main}>
            <div>
                <h1 className={styles.jobTitle}>Hi, my name is Kevin Han</h1>
                <p className={styles.adCopy}>
                    I am a full-stack developer based in New Jersey, USA. I
                    design and build functional websites and web applications.
                </p>
                <div className={styles.buttonContainer}>
                    <a
                        className={`${styles.button} ${styles.buttonFilled}`}
                        href="/projects"
                    >
                        See my projects
                    </a>
                    <a
                        className={`${styles.button} ${styles.buttonOutlined}`}
                        href="/"
                    >
                        View my resume
                    </a>
                    <IconContainer isCircled links={socialLinks} />
                </div>
            </div>
        </DefaultLayout>
    </>
)

export default LandingPage
