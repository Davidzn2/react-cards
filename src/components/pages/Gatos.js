import React, { Component } from 'react';
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Cards from '../Cards'
import '../styles/base.css' ;
import Axios from 'axios';

class Gatos extends Component {
  state={
    gatos:[]
  }
  componentDidMount(){
    Axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res=>{
        this.setState({gatos:res.data})
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="App">
      <Header />
      <div className="cards">
      <h1>Algunos de los gatos favoritos de todos</h1>
        {this.state.gatos.map(gato=> 
        <Cards 
            key={gato.id}
            name={gato.name}
            urlFoto="https://i.pinimg.com/originals/df/7b/99/df7b99eb3f68eccefe9f2ca4e3936d8c.png"
            description={gato.email}
            idAnimal={`gato/${gato.id}`}
        />)}
      
        </div>
        <Footer />
      </div>
    );
  }
}

export default Gatos;
