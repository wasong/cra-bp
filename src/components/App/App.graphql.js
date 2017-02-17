import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import App from './App.redux'

// *********** BASIC **************
// query with gql
// must be signed up with the graphql db to have your name in there
// The result will be
// data.Trainer
// const query = gql`
//   query {
//     Trainer(name: "Andrew") {
//       name
//     }
//   }
// `
// connect the query result with component
// const AppWithData = graphql(query)(App)

// *********** ADVANCED **************
// nested-variable based queries
const varQuery = gql`
  query ($name: String!) {
    Trainer(name: $name) {
      id
      name
      ownedPokemons {
        id
        name
        url
      }
    }
  }
`
// connection with options
const AppWithData = graphql(varQuery, {
  options: {
    variables: {
      name: 'Andrew',
    },
  },
})(App)

export default AppWithData
