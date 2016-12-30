import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {result: "", num1: "", num2: ""};
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.divide = this.divide.bind(this);
    this.multiply = this.multiply.bind(this);
    this.clear = this.clear.bind(this);
  }

  setNum1(e) {
    e.preventDefault();
    this.setState({num1: parseInt(e.target.value)});
  }

  setNum2(e) {
    const num2 = parseInt(e.target.value);
    this.setState({num2}); // setting state using "object destructuring"
  }

  add(e) {
    const result = this.state.num1 + this.state.num2;
    this.setState({result}); // setting state using "object destructuring"
  }

  subtract(e) {
    e.preventDefault();
    const result = this.state.num1 - this.state.num2;
    this.setState({result}); // setting state using "object destructuring"
  }

  multiply(e) {
    e.preventDefault();
    const result = this.state.num1 * this.state.num2;
    this.setState({result}); // setting state using "object destructuring"
  }

  divide(e) {
    e.preventDefault();
    const result = this.state.num1 / this.state.num2;
    this.setState({result: result}); //can also write setState like this
  }

  clear(e) {
    e.preventDefault();
    this.setState({num1: "", num2: ""});
  }

  render() {
    const {result, num1, num2} = this.state;
    return (
      <div>
        <h1>Result: {result}</h1>
        <input value={num1} onChange={this.setNum1} type="text"></input>
        <input value={num2} onChange={this.setNum2} type="text"></input>
        <button onClick={this.clear}>Clear</button>
        <br></br>
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.multiply}>*</button>
        <button onClick={this.divide}>/</button>

      </div>
    );
  }
}

export default Calculator;
