import React, { Component } from 'react'
import PropTypes from 'prop-types'


/**
 * 
 * => @单项数据流
 * => @父组件传到子组件的值为只读属性
 * => @如果改变需要建立副本
 * 
 */
class TodoItem extends Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.state = {}
    }

    static getDerivedStateFromProps(props, state) {
        console.log('***: TodoItem -> getDerivedStateFromProps -> props', props);
        console.log('***: TodoItem -> getDerivedStateFromProps -> state', state);
        return state
    }

    // UNSAFE_componentWillReceiveProps(){
    //
    // }

    render() {
        return (
            <li onClick={this.handleClick}>
              {this.props.name}  {this.props.content} {this.state.test}
            </li>
        )
    }
    handleClick() {
        /**
         * => @子组件调用父组件传过来的方法 
         */
        this.props.delItem(this.props.index);
    }
}
TodoItem.propTypes = {
    index: PropTypes.number.isRequired,
    delItem: PropTypes.func
}
TodoItem.defaultProps = {
    name: "一个默认的名字"
}
export default TodoItem