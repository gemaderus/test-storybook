import React, { Component } from 'react'
import Header from './ui/Header/Header';
import Main from './ui/Main/Main';
import Footer from './ui/Footer/Footer';
import Data from './ui/Data/Data';
import Aside from './ui/Aside/Aside';

import './styles/styles.css'

class App extends Component {
  state = {
    open: false
  }

  openMenu = () => {
    const {open} = this.state
    this.setState({
      open: !open
    })
  }

  render() {
    const { open } = this.state;
    const css = open ? 'home menu--open' : 'home';

    return (
      <div className={css}>
        <Aside />
        <div className="content">
          <Header openMenu={this.openMenu} />
          <Main data={Data}/>
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
