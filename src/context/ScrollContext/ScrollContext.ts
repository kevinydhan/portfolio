import { createContext } from 'react'
import type { ScrollContextValue as Value } from '$typings'

const ScrollContext = createContext<Value>({
  isScrollingDown: false,
})

export default ScrollContext
