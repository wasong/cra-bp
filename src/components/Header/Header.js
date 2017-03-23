import React from 'react'

import './Header.css'
import logo from '../../logo.svg'

export default props => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <br />
    { /* render children from Router */}
    {props.children}
  </div>
)
