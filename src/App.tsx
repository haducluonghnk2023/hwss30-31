import React, { Component } from 'react'
import Child from "./components/Child"
import Ex01 from './components/Ex01'
import Ex02 from './components/Ex02'
import Ex03 from './components/Ex03'
import Ex04 from './components/Ex04'
import Ex10 from './components/Ex10'
import Ex09 from './components/Ex09'
import Ex08 from './components/Ex08'
import Ex07 from './components/Ex07'
import Ex06 from './components/Ex06'
interface Props {

}
interface State {
  name:string,
  age:number
  count:number,
  isActive:boolean
}

export default class App extends Component<Props,State> {
  constructor(props:Props){
    super(props)
    this.state = {
      // chứa những dữ liệu 
      name:'minh thu',
      age:20,
      count:0,
      isActive:true
    }
    console.log("giai đoạn khởi tạo");
    
  }
  // phương thức thay đổi state
  // khi muốn thay đổi state đối với class component thì dùng this.setState
  handleClick = () => {
    this.setState({
      count:this.state.count + 1
    })
  }
  componentWillMount(): void {
    console.log("componentWillmount được gọi!");
    /*
        chạy trước render cho nên ở components có thể tính toán lại state
        hoặc props nhưng nên lưu í thời gian mà chuyển sang render nhanh
    */ 
  }
  componentDidMount(): void {
    console.log("componentDidMount được gọi");
    /*
        chạy sau khi compponent render lần đầu tiên 
        các thành phần của component được gắn vào dom
        nó có thể thực hiện tương tác với dom
        nơi lí tưởng để callAPI lấy data render ra component
    */
    
  }
  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any):boolean {
    console.log(1111111111);
      return true
  }
  componentWillUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): void {
      console.log(" phương thức componentWillupdate được gọi");
      // chạy trước re-render nên thằng này cũng có thể dùng để tính toán lại state hoặc props
      
  }
  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
    console.log(" phương thức componentDidupdate được gọi");
    // chạy sau khi re-render 
    // các phần tử của component nó được gắn kết vào dom cho nên có thể tương tác với dom
  }
  // tạo phương thức remove khỏi dom 
  handleRemove = () => {
    this.setState({
      isActive:!this.state.isActive
    })
  }
  render() {
    // không được setState ở đây
    // component re-render liên tục ==> chạy vô hạn
    console.log("component bắt đầu re-render");
    // console.log(1234);
    
  
    return (
      <div>App
        {this.state.name}
        {this.state.isActive ? <Child></Child> : ""}
        <button onClick={this.handleRemove}> remove child</button>
        <p>giá trị biến count :{this.state.count}</p>
        <button onClick={this.handleClick}>count</button>
        <Ex01></Ex01>
        <Ex02></Ex02>
        <Ex03></Ex03>
        <Ex04></Ex04>
        <Ex06></Ex06>
        <Ex07></Ex07>
        <Ex08></Ex08>
        <Ex09></Ex09>
        <Ex10></Ex10>
      </div>
    )
  }
}
