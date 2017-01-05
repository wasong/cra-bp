import injectTapEventPlugin from 'react-tap-event-plugin'
import React from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { render } from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import rootReducer from './reducers/reducers'
import Routes from './Routes'
import './index.css'

// TODO: babel-polyfill, redux-thunk, redux-logger
injectTapEventPlugin()

const loggerMiddleware = createLogger()

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
