import React, { Component } from 'react'
import ChildComponents from './ChildComponents'
interface State {
    propData:string;
}
export default class Ex06 extends Component<{},State> {
    constructor(props:any) {
        super(props);
        this.state = {
          propData: 'Initial Data'
        };
    }
    updatePropData = () => {
        this.setState({
          propData: 'Updated Data'
        });
    }
  render() {
    return (
      <div>
        <h2>Ex06</h2>
        <button onClick={this.updatePropData}>Cap nhat data</button>
        <ChildComponents data={this.state.propData} />
      </div>
    )
  }
}
