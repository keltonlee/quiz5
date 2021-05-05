import React from 'react';   
export default class CounterButton extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
    counter: 0
    }
    this.handleClick = this.handleClick.bind(this)
    }
    handleClick(event) {
    this.setState({ counter: this.state.counter+1});
    console. log(this.state);
    }
    render() {
    var text = this.state.counter;
    return(<button onClick={this.handleClick}>第{this.props.i}個按鍵 你點了 {text}次</button>);
    }
    }