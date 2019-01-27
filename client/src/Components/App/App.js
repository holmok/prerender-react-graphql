import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import About from '../About/About'
import BookList from '../BookList/BookList'
import BookDetail from '../BookDetail/BookDetail'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import { ApolloProvider } from 'react-apollo'
import client from '../../apollo-client'

import './App.scss'

class App extends Component {
  render () {
    return (
      <ApolloProvider client={client}>
        <Switch>
          <div>
            <Header />
            <div className='container'>
              <Route path='/' exact component={Home} />
              <Route path='/about' exact component={About} />
              <Route path='/books' exact component={BookList} />
              <Route path='/books/:id' exact component={BookDetail} />
            </div>
            <Footer />
          </div>
        </Switch>
      </ApolloProvider>
    )
  }
}

export default App
