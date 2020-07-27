import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Initial extends Component {

    render() {
        return(
            <div align="center">
                <img src={logo} className="App-logo" alt="logo" size="10" />
                <br/>
                <p>
                    <a href="/clock">Clock</a>
                    <br/>
                    <a href="/garage">Garage</a>
                    <br/>
                </p>
            </div>
        );
    }
}

export default Initial;