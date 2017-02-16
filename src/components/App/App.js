import React, { Component } from 'react'
import logo from '../../logo.svg'
import './App.css'

const App = props => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <button className="btn" onClick={props.loadDefault}>Redux!</button>
  </div>
)

export default App
