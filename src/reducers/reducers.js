import { combineReducers } from 'redux'

import { DEFAULT_ACTION } from '../actions/actions'

// helper function to create reducers
const createReducer = (initState, handlers) => {
  return (state = initState, action) => {
    if ({}.hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action)
    }
    return state
  }
}

const base = createReducer({}, {
  [DEFAULT_ACTION](state, action) {
    return state
  },
})

const rootReducer = combineReducers({
  base,
})

export default rootReducer
