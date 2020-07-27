import React, { Component } from 'react';

class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
              () => this.tick(),
              1000
            );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({ date: new Date() });
    }

    render() {
        return(
            <div align="center">
               <br/>
               <h2>Time: {this.state.date.toLocaleTimeString()}</h2>
               <br/>
               <a href="/">Return</a>
            </div>
        );
    }
}

export default Clock;