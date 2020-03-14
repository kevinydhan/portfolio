import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'
import { Root } from './Landing.styled'

class Landing extends Component {
    constructor(props) {
        super(props)

        const NavbarHeight = props.theme.dimensions.heights.Navbar

        this.ref = createRef()
        this.observer = new IntersectionObserver(props.handleScroll, {
            rootMargin: `-${NavbarHeight} 0px 0px 0px`,
        })
    }

    componentDidMount() {
        if (this.ref.current) this.observer.observe(this.ref.current)
    }

    render() {
        const { ref } = this

        return (
            <Root ref={ref}>
                <p>Hi there,</p>
                <p>My name is Kevin. I am a full-stack developer</p>
                <p>I am currently based in North Jersey, NJ.</p>
            </Root>
        )
    }
}

Landing.propTypes = {
    theme: PropTypes.object,
    handleScroll: PropTypes.func.isRequired,
}

Landing.defaultProps = {
    handleScroll: (entries) => {
        console.log(entries)
    },
}

export default withTheme(Landing)
