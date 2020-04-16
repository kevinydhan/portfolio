import { css } from 'styled-components'
import PoppinsRegular from '@theme/fonts/Poppins-Regular.ttf'
import PoppinsSemiBold from '@theme/fonts/Poppins-SemiBold.ttf'

const FontFace = css`
    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        src: url(${PoppinsRegular}) format('truetype');
    }

    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        src: url(${PoppinsSemiBold}) format('truetype');
    }
`

export default FontFace
