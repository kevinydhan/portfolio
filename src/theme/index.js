import GlobalStyle from './GlobalStyle'
import colors from './variables/colors'
import dimensions from './variables/dimensions'
import mediaQueries from './mixins/media-queries'

const defaultTheme = {
    colors,
    dimensions,
}

export default {
    defaultTheme,
    GlobalStyle,
    mediaQueries,
}
