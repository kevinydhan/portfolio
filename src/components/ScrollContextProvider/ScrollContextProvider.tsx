import throttle from 'lodash.throttle'
import React, { Component } from 'react'
import { ScrollContext } from '$context'
import { ScrollContextProviderState } from '$typings'

export default class ScrollContextProvider extends Component<
  Record<string, never>,
  ScrollContextProviderState
> {
  private scrollPosition = 0
  observer: IntersectionObserver = null
  observerOptions: IntersectionObserverInit = {}
  throttleWaitInterval = 250

  state = {
    isScrollingDown: false,
  }

  handleScrollEvent = (): void => {
    const { scrollPosition, state } = this
    const { scrollY } = window

    if (scrollY > scrollPosition && !state.isScrollingDown) {
      this.setState({ isScrollingDown: true })
    } else if (scrollY < scrollPosition && state.isScrollingDown) {
      this.setState({ isScrollingDown: false })
    }

    this.scrollPosition = scrollY
  }

  handleObserverEvent: IntersectionObserverCallback = () => {
    return
  }

  observeElement = (): void => {
    return
  }

  componentDidMount = (): void => {
    if (!window) return

    window.addEventListener(
      'scroll',
      throttle(this.handleScrollEvent, this.throttleWaitInterval)
    )
    this.observer = new IntersectionObserver(
      this.handleObserverEvent,
      this.observerOptions
    )
  }

  componentWillUnmount = (): void => {
    window.removeEventListener('scroll', this.handleScrollEvent)
    this.observer.disconnect()
  }

  render = (): JSX.Element => (
    <ScrollContext.Provider
      value={{ ...this.state, observeElement: this.observeElement }}
    >
      {this.props.children}
    </ScrollContext.Provider>
  )
}
