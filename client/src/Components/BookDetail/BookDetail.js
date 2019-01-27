import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

class BookDetail extends Component {
  render () {
    const query = gql`{
      book(id: ${this.props.match.params.id}) {
        id
        title
        author
      }
    }`
    return (
      <Query query={query}>
        {({ data: { book }, loading }) => {
          if (loading || !book) {
            return (
              <p>Loading ...</p>
            )
          }
          return (
            <div>
              <h1>{book.title}</h1>
              <p>Is a book written by: {book.author} and has the id={book.id}</p>
            </div>
          )
        }}
      </Query>
    )
  }
}

export default BookDetail
