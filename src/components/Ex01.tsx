import React, { Component } from 'react'
interface State {
    name:string;
}
interface Props {

}
export default class Ex01 extends Component<Props,State> {
    constructor(props:any) {
        super(props)
        this.state = { 
            name:"hdl"
         }
    }
  render() {
    return (
      <div>
        <h2>Ex01</h2>
        <p>{this.state.name}</p>
      </div>
    )
  }
}
