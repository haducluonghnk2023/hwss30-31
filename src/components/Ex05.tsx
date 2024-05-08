import React, { Component } from 'react';

interface State {
    value: string;
}
interface AppState {
    propValue: string;
  }
class MyComponent extends Component<State> {
  render() {
    const { value } = this.props;

    return (
      <div>
        <h2>Ex05</h2>
        <p>Giá trị props là: {value}</p>
      </div>
    );
  }
}

class App extends Component<{},AppState> {
  constructor(props:any) {
    super(props);
    this.state = {
      propValue: 'Initial Value'
    };
  }

  // Hàm này được gọi khi muốn cập nhật giá trị của props trong component MyComponent
  updatePropValue = () => {
    this.setState({ propValue: 'New Value' });
  }

  render() {
    return (
      <div>
        {/* Truyền giá trị của state vào props của MyComponent */}
        <MyComponent value={this.state.propValue} />
        {/* Button để cập nhật giá trị props */}
        <button onClick={this.updatePropValue}>Cập nhật giá trị props</button>
      </div>
    );
  }
}

export default App;
