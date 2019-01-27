import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navigation.scss'
class Navigation extends Component {
  render () {
    return (
      <span>
        <Link to='/'>Home</Link>
        <span> | </span>
        <Link to='/about'>About</Link>
        <span> | </span>
        <Link to='/books'>Books</Link>
      </span>
    )
  }
}

export default Navigation
