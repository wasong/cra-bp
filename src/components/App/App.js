import React from 'react'
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
    <p>
      <RaisedButton label="Console log Redux!" onClick={props.loadDefault} />
    </p>
    <p>
      <RaisedButton label="Material UI" />
    </p>
    <div>
      Display Graphql query:&nbsp;
      {
        props.data.loading || props.data.error
        ? <span>Loading...</span>
        : (
          <div>
            <div>Trainer name: { props.data.Trainer.name }</div>
            <div>Owned Pokemon: { props.data.Trainer.ownedPokemons.map(pokemon => (
              <div key={pokemon.id}>
                <div>{pokemon.name}</div>
                <img src={pokemon.url} alt="" />
              </div>
            )) }</div>
          </div>
        )
      }
    </div>
  </div>
)

export default App
