import React, { Component } from 'react';
import logo from './logo.svg';
import './Apps.css';

class Apps extends Component {
    render() {
        return (
            <div className="Apps">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <p className="App-intro">
                    you did it!2
                </p>   </div>
        );
    }
}

export default Apps;
