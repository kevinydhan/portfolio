// React modules
import * as React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../../src/App'

export default (): string => {
    return renderToString(React.createElement(App))
}
