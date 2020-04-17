import { css } from 'styled-components'
import PoppinsRegular from '@theme/fonts/Poppins-Regular.ttf'
import PoppinsSemiBold from '@theme/fonts/Poppins-SemiBold.ttf'

const FontFace = css`
    @font-face {
        font-weight: 400;
        font-family: 'Poppins';
        font-style: normal;

        src: url(${PoppinsRegular}) format('truetype');
    }

    @font-face {
        font-weight: 600;
        font-family: 'Poppins';
        font-style: normal;
        src: url(${PoppinsSemiBold}) format('truetype');
    }
`

export default FontFace
