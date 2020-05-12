import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout'
import '../theme/global.scss'

const LandingPage = (): JSX.Element => (
    <DefaultLayout>
        <div>
            <h1>Full-Stack Developer</h1>
            <p>I design and build functional websites and web applications.</p>
            <a href="/projects">See my projects</a>
            <a href="/">View my resume</a>
        </div>
    </DefaultLayout>
)

export default LandingPage
