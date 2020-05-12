import React from 'react'
import PropTypes from 'prop-types'
import { PropTypeReactChildren } from '../utils'
import { TopNav, BottomNav } from '../components'
import styles from './DefaultLayout.module.scss'

/**
 *
 * @param {JSX.Element[] | JSX.Element} children - React children
 * @param {string} additionalClassNames - Additional CSS classes to append onto the root element of the layout
 *
 * @returns {JSX.Element}
 */
const DefaultLayout = ({ children, additionalClassNames }): JSX.Element => {
    const mainClassNames =
        styles.main + (additionalClassNames ? ` ${additionalClassNames}` : '')

    return (
        <main className={mainClassNames}>
            <TopNav />
            {children}
            <BottomNav />
        </main>
    )
}

DefaultLayout.propTypes = {
    children: PropTypeReactChildren,
    additionalClassNames: PropTypes.string,
}

export default DefaultLayout
