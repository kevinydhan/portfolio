import React, { Component } from 'react'
import Components from './components'
import Views from './views'

const { Navbar, SocialIconContainer } = Components
const { Landing, Projects } = Views

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLandingVisible: true,
        }
        this.handleScroll = this.handleScroll.bind(this)
    }

    handleScroll(entries) {
        entries.forEach((entry) => {
            this.setState({ isLandingVisible: entry.isIntersecting })
        })
    }

    render() {
        const { state, handleScroll } = this
        const { isLandingVisible } = state

        return (
            <>
                <Navbar isTransparent={isLandingVisible} />
                <Landing handleScroll={handleScroll}>
                    <SocialIconContainer isLandingVisible={isLandingVisible} />
                </Landing>
                <Projects />
            </>
        )
    }
}

export default App
