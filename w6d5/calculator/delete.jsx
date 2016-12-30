import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {result: 0, num1: "a", num2: "b"};
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
  }

  setNum1(e) {
    e.preventDefault();
    this.setState({num1: e.value});
  }

  render() {
    return (
      <div>
        <input value={this.state.num1} type="text" onChange={this.setNum1}></input>
        <h1>{this.state.result}</h1>
      </div>
    );
  }
}

export default Calculator;
