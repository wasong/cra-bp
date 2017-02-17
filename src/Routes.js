import React, { PropTypes } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

import App from './components/App'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/ciz8p3pigcva00123r4wyfq1r' }),
})

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
