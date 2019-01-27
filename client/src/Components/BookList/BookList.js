import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const query = gql`
  query graphql {
    books {
      id
      title
      author
    }
  }
`

class BookList extends Component {
  render () {
    return (
      <div>
        <h1>Book List</h1>
        <Query query={query}>
          {({ data: { books }, loading }) => {
            if (loading || !books) {
              return (
                <p>Loading ...</p>
              )
            }
            return (
              <ul>
                {books.map((book) => {
                  return (<li key={book.id}>
                    <strong>{book.title}</strong>
                    <span> by </span>
                    <em>{book.author} </em>
                    <Link to={`books/${book.id}`}>More info</Link>
                  </li>)
                })}
              </ul>
            )
          }}
        </Query>
      </div>
    )
  }
}

export default BookList
