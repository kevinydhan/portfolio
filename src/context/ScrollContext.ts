import { createContext } from 'react'
import { ScrollContextValue } from '$typings'

const ScrollContext = createContext<ScrollContextValue>({
  isScrollingDown: false,
  observeElement: () => {
    return
  },
})

export default ScrollContext
