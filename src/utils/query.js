import ApolloClient, { createNetworkInterface } from 'apollo-client'

export const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/ciz8p3pigcva00123r4wyfq1r' }),
})

export const query = async (options) => {
  return client.query(options)
}

export default {}
