import injectTapEventPlugin from 'react-tap-event-plugin'
import React from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { render } from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import base from './default.modules'
import Routes from './Routes'
import './index.css'

injectTapEventPlugin()

const loggerMiddleware = createLogger()
const rootReducer = combineReducers({
  // add reducers here
  base,
})

const store = createStore(rootReducer,
  {
    base: '',
  },
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
  ),
)

render(
  <Routes store={store} />,
  document.getElementById('root'),
)
