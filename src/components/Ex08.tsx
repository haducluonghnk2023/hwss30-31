import React, { Component } from 'react'
interface State {
    inputValue:string
}
export default class Ex08 extends Component<{}, State> {
    constructor(props:any) {
        super(props)
        this.state = {
            inputValue:""
        }
    }
    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<any>) {
        if (prevState.inputValue !== this.state.inputValue) {
          document.title = this.state.inputValue || "Default Title"; // Đặt tiêu đề của trình duyệt
        }
      }
    
      handleInputChange = (event:any) => {
        this.setState({
          inputValue: event.target.value
        });
      }
      render() {
        return (
          <div>
            <h2>Ex08</h2>
            <input
                type="text"
                value={this.state.inputValue}
                onChange={this.handleInputChange}
                placeholder="Nhập dữ liệu..."
            />
          </div>
        )
      }
}




