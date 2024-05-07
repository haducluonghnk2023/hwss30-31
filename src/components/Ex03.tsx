import React, { Component } from 'react'
interface State {
    Company:string;
    check:boolean
}
export default class Ex03 extends Component<{}, State> {
    constructor(props:any) {
        super(props)
        this.state = {
            Company:"Rikkei Academy",
            check:false
        }
    }
    handleChange = () =>{
        this.setState(e=>({
            Company:"RikkeiSoft",
            check:!e.check
        }))
    }
  render() {
    const {  check } = this.state;
    return (
      <div>
        <h2>Ex03</h2>
        <p>khi chua click :{check ? "RikkeiSoft" : "Rikkei Academy"}</p>
        <button onClick={this.handleChange}>Change state</button>
        
      </div>
    )
  }
}
