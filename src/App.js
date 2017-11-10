import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div styleName="App">
        <header styleName="header">
          <img src={logo} styleName="logo" alt="logo" />
          <h1 styleName="title">Welcome to React</h1>
        </header>
        <p styleName="intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
