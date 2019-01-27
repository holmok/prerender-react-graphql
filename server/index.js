const Koa = require('koa')
const { ApolloServer, gql } = require('apollo-server-koa')

const books = [
  {
    id: 1,
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling'
  },
  {
    id: 2,
    title: 'Jurassic Park',
    author: 'Michael Crichton'
  }
]

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "Book" type can be used in other type declarations.
  type Book {
    id: Int!
    title: String
    author: String
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    books: [Book],
    book(id: Int!): Book
  }
`

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    books () { return books },
    book (_, { id }) { return books.find(book => book.id === id) }
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

const app = new Koa()
server.applyMiddleware({ app })

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)
