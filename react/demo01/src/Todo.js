import React, { Component, Fragment } from 'react'

/**
 * => @引入子组件 
 */


import TodoItem from './TodoItem'

class Todo extends Component {
    constructor(props) {
        super(props)
        this.delItem = this.delItem.bind(this);
        this.state = {
            inputValue: "",
            list: [
                'item1', 'item2'
            ]
        }
    }
    // UNSAFE_componentWillMount() {
    //     console.log("componentWillMount ==> 将要挂在")
    // }
    componentDidMount() {
        console.log("1-componentDidMount ==> 挂在完成")
    }
    shouldComponentUpdate() {
        console.log("2-shouldComponentUpdate 更新前调用,处理是否更新")
        /**
         * @通过返回的boolean决定是否更新渲染
         * @返回true继续执行false终止更新
         */
        return true
    }
    // UNSAFE_componentWillReceiveProps(){
    //
    // }

    // UNSAFE_componentWillUpdate(){
    // 
    // }
    // componentWillUpdate() {
    //     console.log("3-确定要更新前调用")
    // }




    getSnapshotBeforeUpdate() {

    }
    componentDidUpdate() {
        console.log("5-更新后调用")
    }

    componentWillUnmount() {
        console.log("卸载")
    }
    render() {
        console.log("render ==> 渲染")
        return (
            <Fragment>
                {
                    /**
                     * =>@注释
                     */ 
                }
                <div >
                    <label htmlFor="labelId">增加todo</label>
                    <input type="text"
                        id="labelId"
                        value={this.state.inputValue} 
                        className="testClass"
                        onChange={this.inputChange.bind(this)} />
                    <button onClick={this.addItem.bind(this)}>增加</button>
                </div>                
                {
                    /**
                     * @ref获取dom节点
                     * @传入参数为当前dom节点
                     * @testul为返回的变量
                     */
                }
                <ul className='test' ref={(test)=> this.testul = test}>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                    <TodoItem key={index+item} content={item} index={index} delItem={this.delItem}/>
                                )
                            })
                            /*  
                            <li key={index+item}
                                onClick={this.delItem.bind(this,index)}
                                dangerouslySetInnerHTML={{__html:item}}>
                                {
                                    // dangerouslySetInnerHTML 可以渲染html标签 
                                    // {item} 
                                }
                            </li> 
                            */
                    }
                </ul>
            </Fragment>
        )
    }
    inputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    addItem() {
        let list = this.state.list,
            value = this.state.inputValue;
        if (!value) return;
        list.push(value)

        /**
         * => @setState为异步查看dom节点需在更新后
         * => @setState提供一个回调函数在执行完成后调用 
         */
        this.setState({
            list,
            inputValue: ''
        }, () => {
            console.log(this.testul.querySelectorAll('li').length)
        })
    }
    /**
     * 
     * @删除列表
     */
    delItem(index) {
        let list = this.state.list;
        list.splice(index, 1);
        this.setState({
            list
        })
    }
}

export default Todo