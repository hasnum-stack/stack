import React, { Component } from 'react';
class ComponentTestA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 123,
    };
  }
  render() {
    return <div>{this.state.a}</div>;
  }
}
export default ComponentTestA;
