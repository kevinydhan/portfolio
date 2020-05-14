import React from 'react'
import PropTypes from 'prop-types'
import { PropTypeReactChildren } from '../utils'
import TopNav from './TopNav/TopNav'
import BottomNav from './BottomNav/BottomNav'

const DefaultLayout = ({ children, additionalClassNames }): JSX.Element => (
    <>
        <TopNav />
        <main className={additionalClassNames}>{children}</main>
        <BottomNav />
    </>
)

DefaultLayout.propTypes = {
    children: PropTypeReactChildren,
    additionalClassNames: PropTypes.string,
}

export default DefaultLayout
