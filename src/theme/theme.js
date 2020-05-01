const fontSizeRatio = 1.2

const getFontSizeMultipler = (multiplier = 1, unit = 'rem') => {
    if (!typeof multiplier === 'number') return
    return `${parseFloat((fontSizeRatio ** multiplier).toFixed(4))}${unit}`
}

export default {
    colorBackground: '22, 22, 22',
    colorHeading: '255, 255, 255',
    colorText: '185, 185, 185',
    colorPrimary: '4, 0, 255',
    colorYellow: '234, 255, 25',
    colorRed: '198, 75, 9',
    colorLightBlue: '13, 136, 255',

    fontFamilyPrimary: '"Poppins", sans-serif',
    fontFamilyLogo: '"Archivo", sans-serif',

    fontSizes: {
        '-1.5': `${getFontSizeMultipler(-1.5)}`,
        '-1': `${getFontSizeMultipler(-1)}`,
        '-0.5': `${getFontSizeMultipler(-0.5)}`,
        '0': `${getFontSizeMultipler(0)}`,
        '+0.5': `${getFontSizeMultipler(0.5)}`,
        '+1': `${getFontSizeMultipler(1)}`,
        '+2': `${getFontSizeMultipler(2)}`,
        '+3': `${getFontSizeMultipler(3)}`,
        '+4': `${getFontSizeMultipler(4)}`,
        '+5': `${getFontSizeMultipler(5)}`,
        '+6': `${getFontSizeMultipler(6)}`,
    },

    heightNavbar: '5rem',
    maxWidthMain: '85.375rem', // 1366px @ 1rem = 16px
    minHeightMain: '48rem', // 768px @ 1rem = 16px

    paddingSidesMainXs: '1rem',
    paddingSidesMainSm: '1.5rem',
    paddingSidesMainMd: '2.25rem',
    paddingSidesMainLg: '3rem',
    paddingSidesMainXl: '3rem',

    breakpointXs: '20em', // 320px @ 1rem = 16px
    breakpointSm: '35.5em', // 568px @ 1rem = 16px
    breakpointMd: '48em', // 768px @ 1rem = 16px
    breakpointLg: '64em', // 1024px @ 1rem = 16px
    breakpointXl: '85.375em', // 1366px @ 1rem = 16px

    boxShadowMain: '0 0.625rem 1.875rem -0.625rem rgba(2, 12, 27, 0.7)',

    transitionButtonLink: '150ms ease-out',
    transitionIconLink: '150ms ease-out',
    transitionNavbar: '300ms ease-out',
    transitionNavLink: '250ms ease-out',
    transitionLogo: '100ms ease-out',
}
