import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from '@theme'

const heights = theme.dimensions.heights

const Section = styled('section')`
    /* Positional styles */
    position: relative;

    /* Box model styles */
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    max-width: 1440px;

    /* Fills the remaining space of the screen, taking into account the
       navigation bar's height.  */
    min-height: calc(100vh - ${heights.navbar.sm});
    padding: 0 24px;

    ${(props) => props.additionalStyles}
`

Section.defaultProps = { additionalStyles: [] }
Section.propTypes = { additionalStyles: PropTypes.array }

export default Section
