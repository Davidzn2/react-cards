import React, { Component } from 'react';
import Header from '../layout/Header'
import Footer from '../layout/Footer'

import '../styles/base.css' ;

class Home extends Component {
  render() {
    return (
    <div>
      <Header />
      <p>Este es el inicio de mi app web ;-)</p>
      <Footer />
    </div>

    );
  }
}

export default Home;
