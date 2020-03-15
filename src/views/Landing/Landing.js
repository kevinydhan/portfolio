import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'
import {
    Root,
    TextContainer,
    TextShadowWord,
    IntroductionParagraph,
    EmphasizedWord,
} from './Landing.styled'

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
        const { props, ref } = this
        const { children } = props

        return (
            <Root ref={ref}>
                <TextContainer>
                    <TextShadowWord>Hi there,</TextShadowWord>
                    <IntroductionParagraph>
                        I am a full-stack developer specializing in building web
                        applications using{' '}
                        <EmphasizedWord>React</EmphasizedWord>,{' '}
                        <EmphasizedWord>Redux</EmphasizedWord>,{' '}
                        <EmphasizedWord>Sass</EmphasizedWord>, and{' '}
                        <EmphasizedWord>Express</EmphasizedWord>.
                    </IntroductionParagraph>
                    <IntroductionParagraph>
                        I am based in North Jersey, NJ and am currently looking
                        for junior- to mid-level positions in the NJ/NY area. I
                        am also open to remote opportunities.
                    </IntroductionParagraph>
                </TextContainer>
                {children}
            </Root>
        )
    }
}

Landing.propTypes = {
    children: PropTypes.node,
    theme: PropTypes.object,
    handleScroll: PropTypes.func.isRequired,
}

Landing.defaultProps = {
    handleScroll: (entries) => {
        console.log(entries)
    },
}

export default withTheme(Landing)
