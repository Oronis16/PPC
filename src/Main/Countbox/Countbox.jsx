import React from "react";
import "./Countbox.css";

export class Countbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: '',
      count1: '',
      count2: '',
      count3: '',
      count4: '',
      count5: '',
      result: ''
    };
    this.addSumNum = this.addSumNum.bind(this);
  }

  addSumNum() {
    let sumImg = this.state.num;
    let count2 = this.state.count2;
    let count3 = this.state.count3;
    let count4 = this.state.count4;
    let count5 = this.state.count5;

    sumImg = sumImg - (count2 + count3 + count4 + count5)
    return sumImg + (count2 * 2 + count3 * 3 + count4 * 4 + count5 * 5)
  }

  handleChange(stateVariable, e) {
    this.setState({
      [stateVariable]: Number(e.target.value)
    })
  }

  render() {
    return (
      <div>
        <div className="title">
          Sum image
          <input onChange={(e) => this.handleChange('num', e)} value={this.state.num} className="counter" type="number" />
        </div>
        <div className="title">
          2 plate
          <input onChange={(e) => this.handleChange('count2', e)} value={this.state.count2} className="counter" type="number" />
        </div>
        <div className="title">
          3 plate
          <input onChange={(e) => this.handleChange('count3', e)} value={this.state.count3} className="counter" type="number" />
        </div>
        <div className="title">
          4 plate
          <input onChange={(e) => this.handleChange('count4', e)} value={this.state.count4} className="counter" type="number" />
        </div>
        <div className="title">
          5 plate
          <input onChange={(e) => this.handleChange('count5', e)} value={this.state.count5} className="counter" type="number" />
        </div>
    <div>Sum plate: {this.addSumNum()}</div>
      </div>
    );
  }
}
