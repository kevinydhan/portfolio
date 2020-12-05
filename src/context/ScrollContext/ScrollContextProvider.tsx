import throttle from 'lodash.throttle'
import React, { Component } from 'react'
import { ScrollContextProviderState as State } from '$typings'
import ScrollContext from './ScrollContext'

class ScrollContextProvider extends Component<Record<string, unknown>, State> {
  /**
   * References the current scroll position, or `window.scrollY`, of the page.
   */
  private scrollPosition = 0

  /**
   * References the time, in milliseconds, between each scroll event handler
   * invocation.
   */
  readonly throttleWaitInterval = 250

  state = {
    isScrollingDown: false,
  }

  handleScrollEvent = throttle((): void => {
    const { scrollPosition, state } = this
    const { scrollY } = window

    if (scrollY > scrollPosition && !state.isScrollingDown) {
      this.setState({ isScrollingDown: true })
    } else if (scrollY < scrollPosition && state.isScrollingDown) {
      this.setState({ isScrollingDown: false })
    }

    this.scrollPosition = scrollY
  }, this.throttleWaitInterval)

  componentDidMount = (): void => {
    if (!window) return
    window.addEventListener('scroll', this.handleScrollEvent)
  }

  componentWillUnmount = (): void => {
    window.removeEventListener('scroll', this.handleScrollEvent)
  }

  render = (): JSX.Element => (
    <ScrollContext.Provider value={this.state}>
      {this.props.children}
    </ScrollContext.Provider>
  )
}

export default ScrollContextProvider
