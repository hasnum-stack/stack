import react, { Component } from 'react';
import ComA from './components/com-a';
import { Button } from 'antd';

export default class test extends Component {
  constructor() {
    super();
    this.state = {
      currentCount: 0,
      childCount: 0,
    };
  }

  render() {
    console.log('render');
    return (
      <>
        <div>789073289423</div>
        <div>
          <Button
            type="danger"
            onClick={() => {
              this.childCut();
            }}
          >
            -
          </Button>
          <ComA count={this.state.childCount}></ComA>
          <Button
            type="primary"
            onClick={() => {
              this.childPlus();
            }}
          >
            +
          </Button>
        </div>
      </>
    );
  }
  childPlus() {
    this.setState({
      childCount: this.state.childCount + 1,
    });
  }
  childCut() {
    this.setState({
      childCount: this.state.childCount - 1,
    });
  }
}
function dsfdsfsdf() {}
console.log('🚀 ~ dsfdsfsdf', dsfdsfsdf);
const tresfsdf = () => {};
console.log('🚀 ~ tresfsdf', tresfsdf);
