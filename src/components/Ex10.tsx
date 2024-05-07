import React, { Component } from 'react'

interface State {
    count: number;
}
export default class Ex10 extends Component<{}, State> {
    intervalId: number;
    constructor(props:any) {
        super(props);
        this.state = {
          count: 0
        };
        this.intervalId = 0; // Khởi tạo intervalId với giá trị mặc định
    }
    componentDidMount() {
        this.intervalId = setInterval(this.updateCount, 1000);
    }
    
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    updateCount = () => {
        this.setState((e: { count: number }) => ({
          count: (e.count + 1) % 11 // Đặt lại 0
        }));
    }
    
  render() {
    return (
      <div>
        <h2>Ex10</h2>
        <p>Count : {this.state.count}</p>
      </div>
    )
  }
}
