import React, { PureComponent } from 'react';
import Child from './Child';

class App extends PureComponent {
    constructor(props) {
        console.log('constructor!');
        super(props);
        this.state = {
            isShow: true,
            movieList1: [],
            movieList2: [],
            movieList3: [],
        };
    }

    componentDidMount() {
        console.log('🚀 ~ App ~ componentDidMount ~');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate!');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount!');
    }

    handleAddItem(sign, item) {
        // console.log(sign, item, this);

        this.setState({
            [`movieList${sign}`]: [...this.state[`movieList${sign}`], item],
        });
    }

    handleDeleteItem(sign, index) {
        const newMovieList = [...this.state[`movieList${sign}`]];
        newMovieList.splice(index, 1);
        this.setState({
            [`movieList${sign}`]: newMovieList,
        });
    }

    render() {
        console.log('🚀 ~ App ~ render ~');
        const { isShow, movieList1, movieList2, movieList3 } = this.state;
        return (
            <div>
                {isShow && (
                    <div>
                        <h1>电影列表</h1>
                        <Child
                            list={movieList1}
                            sign={1}
                            handleAddItem={(sign, item) => this.handleAddItem(sign, item)}
                            handleDeleteItem={(sign, index) => this.handleDeleteItem(sign, index)}
                        />
                        <Child
                            list={movieList2}
                            sign={2}
                            handleAddItem={(sign, item) => this.handleAddItem(sign, item)}
                            handleDeleteItem={(sign, index) => this.handleDeleteItem(sign, index)}
                        />
                        <Child
                            list={movieList3}
                            sign={3}
                            handleAddItem={(sign, item) => this.handleAddItem(sign, item)}
                            handleDeleteItem={(sign, index) => this.handleDeleteItem(sign, index)}
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default App;
