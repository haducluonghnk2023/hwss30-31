import React, { Component } from 'react'
interface State {
    data:string;
}
export default class ChildComponents extends Component<State> {
    shouldComponentUpdate(nextProps:any) {
        // Kiểm tra xem giá trị của prop đã thay đổi hay không
        if (nextProps.data === this.props.data) {
          return false; // Nếu không có thay đổi, không render lại component
        }
        return true; // Nếu có thay đổi, render lại component
    }
  render() {
    return (    
      <div>ChildComponents
        <p>{this.props.data}</p>
      </div>
    )
  }
}
