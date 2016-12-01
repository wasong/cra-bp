import React from 'react'
import { createStore } from 'redux'
import { render } from 'react-dom'
import Routes from './Routes'
import './index.css'

// change anon function to your main reducer
const store = createStore(() => {}, {})

render(
  <Routes store={store} />,
  document.getElementById('root'),
)
