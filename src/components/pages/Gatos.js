import React, { Component } from 'react';
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Cards from '../Cards'
import '../styles/base.css' ;

class Gatos extends Component {
  render() {
    return (
      <div className="App">
      <Header />
        <h1>Algunos de los gatos favoritos de todos</h1>
        <div className="cards">
          <Cards 
            name="Kit el gato"
            urlFoto="https://mx.hola.com/imagenes/estar-bien/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-m.jpg?interpolation=lanczos-normal&downsize=0.75xw:*&output-format=progressive-jpeg&output-quality=70"
            description="lorem ipsum"
          />
          <Cards 
            name="El gato volador"
            urlFoto="https://i.ytimg.com/vi/6EoWQkDiLKY/hqdefault.jpg"
            description="lorem ipsum"
          />
          <Cards 
            name="Don Gato"
            urlFoto="https://i.pinimg.com/originals/df/7b/99/df7b99eb3f68eccefe9f2ca4e3936d8c.png"
            description="lorem ipsum"
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Gatos;
