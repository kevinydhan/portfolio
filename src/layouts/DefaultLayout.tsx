import React from 'react'
import { PropTypeReactChildren } from '../utils'
import { TopNav, BottomNav } from '../components'
import styles from './DefaultLayout.module.scss'

const DefaultLayout = ({ children }): JSX.Element => (
    <main className={styles.main}>
        <TopNav />
        {children}
        <BottomNav />
    </main>
)

DefaultLayout.propTypes = {
    children: PropTypeReactChildren,
}

export default DefaultLayout
