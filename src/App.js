import React, { Component } from 'react'
import Components from './components'
import Views from './views'

const { Navbar } = Components
const { Landing } = Views

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLandingIntersecting: true,
        }
        this.handleScroll = this.handleScroll.bind(this)
    }

    handleScroll(entries) {
        entries.forEach((entry) => {
            this.setState({ isLandingIntersecting: entry.isIntersecting })
        })
    }

    render() {
        const { state, handleScroll } = this
        const { isLandingIntersecting } = state

        return (
            <>
                <Navbar isTransparent={isLandingIntersecting} />
                <Landing handleScroll={handleScroll} />
            </>
        )
    }
}

export default App
