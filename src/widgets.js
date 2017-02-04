/*
  Rules for DUCK redux modularity
  - MUST export default a function called reducer()
  - MUST export its action creators as functions
  - MUST have action types in the form npm-module-or-app/reducer/ACTION_TYPE
*/

// actions
const DEFAULT = 'src/DEFAULT'

// helper function to create reducers
const createReducer = (initState, handlers) => {
  return (state = initState, action) => {
    if ({}.hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action)
    }
    return state
  }
}

// reducer
const reducer = createReducer({}, {
  [DEFAULT](state, action) {
    return state
  },
})

// action creators
export const loadDefault = () => {
  return { type: DEFAULT }
}

export default reducer
