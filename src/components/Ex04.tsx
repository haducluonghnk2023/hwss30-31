import React, { Component } from 'react'
interface State {
    Slogan:string
}
export default class Ex04 extends Component<{},State> {
    constructor(prop:any) {
        super(prop)
        this.state = {
            Slogan:"hoc code de di lam"
        }
    }
    handleChange = () => {
        // Chỉ cập nhật state nếu giá trị mới khác với giá trị hiện tại
        if (this.state.Slogan !== "a") {
            this.setState({
                Slogan: "a"
            });
        }
    };

    // Kiểm tra nếu state không thay đổi, không cần re-render
    shouldComponentUpdate(nextProps: any, nextState: State) {
        return this.state.Slogan !== nextState.Slogan;
    }

  render() {
    return (
      <div>
        <h2>Ex04</h2>
        <button onClick={this.handleChange} >Change State</button>
        <p>
            {this.state.Slogan}
        </p>
      </div>
    )
  }
}
