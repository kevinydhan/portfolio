import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

const Projects = (props) => {
    const { observeElement } = props

    const div1 = useRef()
    const div2 = useRef()
    const div3 = useRef()

    console.log('Projects component re-rendered.')

    return (
        <section id="projects">
            <div
                ref={div1}
                style={{
                    height: '100vh',
                    width: '100%',
                    maxWidth: '1400px',
                    margin: '0 auto',
                    display: 'grid',
                    placeItems: 'center',
                    border: '1px solid white',
                }}
                className="blue"
            >
                Blue
            </div>
            <div
                ref={div2}
                style={{
                    height: '100vh',
                    width: '100%',
                    maxWidth: '1400px',
                    margin: '0 auto',
                    display: 'grid',
                    placeItems: 'center',
                    border: '1px solid white',
                }}
                className="yellow"
            >
                Yellow
            </div>
            <div
                ref={div3}
                style={{
                    height: '100vh',
                    width: '100%',
                    maxWidth: '1400px',
                    margin: '0 auto',
                    display: 'grid',
                    placeItems: 'center',
                    border: '1px solid white',
                }}
                className="red"
            >
                Red
            </div>
        </section>
    )
}

Projects.propTypes = {
    observeElement: PropTypes.func.isRequired,
}

export default Projects
