import React from 'react';
export default class Relay extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    // return <Relay2 ref={this.props.reftest}>123 </Relay2>;
    return <input ref={this.props.reftest} />;
  }
}
// export default React.forwardRef((props, ref) => {
//   console.log('🚀 ~ React.forwardRef ~ ref', ref);
//   return <Relay2 ref={ref} type="text" />;
// });
// class Relay2 extends React.Component {
//   render() {
//     return <div>123</div>;
//   }
// }
