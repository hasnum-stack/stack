import React, { Fragment, PureComponent } from 'react';

export default class Child extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            addItemIsShow: false,
            movieName: '',
        };
    }
    componentDidMount() {
        console.log('🚀 ~ Child ~ componentDidMount ~', this.props.sign);
    }
    componentWillUnmount() {
        console.log('child componentWillUnmount!');
    }

    handleAddItem() {
        const { handleAddItem, sign } = this.props;
        const { movieName } = this.state;
        const item = {
            id: new Date().valueOf(),
            name: movieName,
        };
        handleAddItem(sign, item);
        console.log(this);
        this.setState({
            addItemIsShow: false,
            movieName: '',
        });
    }

    handleChange(e) {
        this.setState({
            movieName: e.target.value,
        });
    }
    handleDeleteItem(index) {
        const { handleDeleteItem, sign } = this.props;
        handleDeleteItem(sign, index);
    }
    render() {
        console.log('🚀 ~ Child ~ render ~ render', this.props.sign);
        // console.log(this.props);
        const { addItemIsShow, movieName } = this.state;
        const { list } = this.props;
        return (
            <Fragment>
                <ul>
                    {list.map((item, index) => {
                        return (
                            <li key={item.id} style={{ display: 'flex' }}>
                                <div>
                                    {index + 1}.{item.name}
                                </div>
                                <button onClick={e => this.handleDeleteItem(index)} style={{ marginLeft: '20px' }}>
                                    删除
                                </button>
                            </li>
                        );
                    })}
                </ul>
                {addItemIsShow && (
                    <div>
                        <input value={movieName} onChange={e => this.handleChange(e)} type="text" placeholder="请输入电影名称" />
                        <button style={{ marginLeft: '20px' }} onClick={e => this.handleAddItem()}>
                            确定
                        </button>
                    </div>
                )}
                {!addItemIsShow && <button onClick={e => this.setState({ addItemIsShow: true })}>新增一条</button>}
            </Fragment>
        );
    }
}
