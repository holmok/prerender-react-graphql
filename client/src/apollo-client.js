const { ApolloClient, HttpLink } = require('apollo-boost')
const fetch = require('node-fetch')
const { InMemoryCache } = require('apollo-cache-inmemory')

const cache = new InMemoryCache()
const client = new ApolloClient(new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql',
    fetch
  }),
  cache })
)

module.exports = client
