import React, { Component } from 'react'
import Navigation from '../Navigation/Navigation'
import './Header.scss'
class Header extends Component {
  render () {
    return (
      <div className='row header'>
        <div className='container'>
          <div className='three columns title'>
            <span>Get It Done!</span>
          </div>
          <div className='nine columns navigation'>
            <Navigation />
          </div>
        </div>
      </div>
    )
  }
}

export default Header
