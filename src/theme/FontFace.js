import { css } from 'styled-components'
import PoppinsRegular from '@theme/fonts/Poppins-Regular.ttf'
import PoppinsMedium from '@theme/fonts/Poppins-Medium.ttf'

const FontFace = css`
    @font-face {
        font-weight: 400;
        font-family: 'Poppins';
        font-style: normal;

        src: url(${PoppinsRegular}) format('truetype');
    }

    @font-face {
        font-weight: 500;
        font-family: 'Poppins';
        font-style: normal;
        src: url(${PoppinsMedium}) format('truetype');
    }
`

export default FontFace
