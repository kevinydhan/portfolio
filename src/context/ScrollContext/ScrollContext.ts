import { createContext } from 'react'
import { ScrollContextValue } from '$typings'

const ScrollContext = createContext<ScrollContextValue>({
  isScrollingDown: false,
})

export default ScrollContext
