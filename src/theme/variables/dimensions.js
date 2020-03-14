const dimensions = {
    /**
     * Contains the numeric values for the number of pixels for each breakpoint.
     */
    breakpoints: {
        xs: 0,
        sm: 480,
        md: 768,
        lg: 992,
        xl: 1200,
    },
    /**
     * Contains CSS dimensional values for heights of components. The purpose
     * is to utilize the heights to handle scroll events in different parts of
     * the application.
     */
    heights: {
        Navbar: '72px',
    },
    /**
     * Contains CSS dimensional values for paddings for different breakpoint
     * keys.
     */
    paddings: {
        xs: '8px',
        sm: '16px',
        md: '32px',
        lg: '64px',
        xl: '132px',
    },
}

export default dimensions
