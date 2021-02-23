import { Component } from 'react';

export default class ComA extends Component {
  // constructor(props) {
  //   super();
  // }
  render() {
    console.log('childRender');
    return (
      <>
        <div>{this.props.count}</div>
        <div>1232133</div>
      </>
    );
  }
}
