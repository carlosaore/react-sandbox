import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count : 0
        };

    }

    setCount = (value) => this.setState({count : this.state.count + value});
    addToCount = () => this.setCount(+1);
    removeFromCount = () => this.setCount(-1);

    render() {
        return (
            <>
                <p>{this.props.text}</p>
                <p>{`The current count (with classes) is ${this.state.count}`}</p>
                <button onClick={this.addToCount}>+</button>
                <button onClick={this.removeFromCount}>-</button>
            </>
        );
    }
}

export default Counter;