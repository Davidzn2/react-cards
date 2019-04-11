import React, { Component } from 'react';
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Cards from '../Cards'
import '../styles/base.css' ;
import Axios from 'axios';

class Gatos extends Component {
  state={
    gato:[]
  }
  componentDidMount(){
    Axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
      .then(res=>{
        this.setState({gato:res.data})
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
        
        <Cards 
            key={this.state.gato.id}
            name={this.state.gato.name}
            urlFoto="https://i.pinimg.com/originals/df/7b/99/df7b99eb3f68eccefe9f2ca4e3936d8c.png"
            description={this.state.gato.email}
            idAnimal={`${this.state.gato.id}`}
        />
      
        </div>
        <Footer />
      </div>
    );
  }
}

export default Gatos;
