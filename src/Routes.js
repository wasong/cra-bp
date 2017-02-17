import React, { PropTypes } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'

import { client } from './utils/query'

import App from './components/App'

const Routes = ({ store }) => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App} />
      </Router>
    </Provider>
  </ApolloProvider>
)

export default Routes
