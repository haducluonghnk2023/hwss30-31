import React, { Component } from 'react'
interface Props {

}
interface State {
    time:Date;
}
export default class Ex09 extends Component<{}, State> {
    timerID:number
    constructor(props:Props) {
        super(props);
        this.state = {
          time: new Date()
        };
        this.timerID = setInterval(() => this.tick(), 1000);
    }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
        this.setState({
          time: new Date()
        });
      }
    
  render() {
    return (
      <div>
        <h2>Ex09</h2>
        <p>Current time:{this.state.time.toLocaleTimeString()}</p>

      </div>
    )
  }
}
