import React, { Component } from 'react'
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator'

export default class ErrorBoundry extends Component {

  // Component state
  state = {
    hasError: false,
  }

  // Lyfecicle methods
  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }

  // Render function
  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    return this.props.children
  }
}
