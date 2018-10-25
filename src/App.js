import React, { Component } from 'react'
import Header from './ui/Header';
import Main from './ui/Main';
import Footer from './ui/Footer';
import Data from './ui/Data';
import Aside from './ui/Aside';

import './styles/styles.css'

class App extends Component {
  state = {
    open: false
  }

  openMenu = () => {
    this.setState({
      open: true
    })
  }

  render() {
    const { open } = this.state;
    const opened = open;
    const css = opened ? 'home open--menu' : 'home';

    return (
      <div className={css} opened={opened}>
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
