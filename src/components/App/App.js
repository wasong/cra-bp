import React from 'react'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'

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
    <div><RaisedButton label="Console log Redux!" onClick={props.loadDefault} /></div>
    <div><RaisedButton label="Material UI" /></div>
    <p><Link to="/auth">Auth</Link></p>
    <div>
      Display Graphql query:&nbsp;
      {
        props.data.loading || props.data.error
        ? <span>Loading...</span>
        : (
          <div>
            {
              props.data.allKappachinoes.map(user => (
                <div key={user.id}>{user.posts}</div>
              ))
            }
          </div>
        )
      }
    </div>
  </div>
)

export default App
