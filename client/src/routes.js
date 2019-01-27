const client = require('./apollo-client')
const gql = require('graphql-tag')

async function getRoutes () {
  const output = ['/', '/about', '/books']
  const { data } = await client.query({
    query: gql`
    query graphql {
      books {
        id
      }
    }
  `
  })
  return output.concat(data.books.map(book => `/books/${encodeURIComponent(book.id)}`))
}

module.exports = { getRoutes }
