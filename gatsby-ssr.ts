import { ReplaceRendererArgs } from 'gatsby'
import { ReactElement } from 'react'
import { renderToString } from 'react-dom/server'

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
}: {
  bodyComponent: ReactElement
  replaceBodyHTMLString: ReplaceRendererArgs['replaceBodyHTMLString']
}): void => {
  const bodyHTML = renderToString(bodyComponent)
  replaceBodyHTMLString(bodyHTML)
}

export { wrapRootElement } from './gatsby-browser'
