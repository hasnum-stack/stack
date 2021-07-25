import React from 'react';
import { Menu, ActivityIndicator, NavBar } from 'antd-mobile';

const data = [
  {
    value: '1',
    label: 'Food',
  },
  {
    value: '2',
    label: 'Supermarket',
  },
  {
    value: '3',
    label: 'Extra',
    isLeaf: true,
  },
];

class MultiMenuExample extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      initData: '',
      show: false,
    };
  }
  onChange = value => {
    console.log(value);
  };
  onOk = value => {
    console.log(value);
    this.onCancel();
  };
  onCancel = () => {
    this.setState({ show: false });
  };
  handleClick = e => {
    e.preventDefault(); // Fix event propagation on Android
    this.setState({
      show: !this.state.show,
    });
    // mock for async data loading
    if (!this.state.initData) {
      setTimeout(() => {
        this.setState({
          initData: data,
        });
      }, 500);
    }
  };

  onMaskClick = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    const { initData, show } = this.state;
    const menuEl = (
      <Menu
        className="single-multi-foo-menu"
        data={initData}
        value={['1']}
        level={1}
        onChange={this.onChange}
        onOk={this.onOk}
        onCancel={this.onCancel}
        height={document.documentElement.clientHeight * 0.6}
        multiSelect
      />
    );
    const loadingEl = (
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: document.documentElement.clientHeight * 0.6,
          display: 'flex',
          justifyContent: 'center',
        }}>
        <ActivityIndicator size="large" />
      </div>
    );
    return (
      <div className={show ? 'single-multi-menu-active' : ''}>
        <div>
          <NavBar leftContent="Menu" mode="light" onLeftClick={this.handleClick} className="single-multi-top-nav-bar">
            Single Multi menu
          </NavBar>
        </div>
        {show ? (initData ? menuEl : loadingEl) : null}
        {show ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}
      </div>
    );
  }
}

export default MultiMenuExample;
