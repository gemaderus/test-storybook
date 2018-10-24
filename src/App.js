import React, { Component } from 'react'
import Header from './ui/Header';
import Main from './ui/Main';
import Footer from './ui/Footer';

import './styles/styles.css'

class App extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App
