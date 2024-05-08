import React, { Component } from 'react'

export default class Ex07 extends Component {
    componentDidMount(): void {
        document.title = "new title"
    }
  render() {
    return (
      <div>
        <h2>Ex07</h2>
      </div>
    )
  }
}
