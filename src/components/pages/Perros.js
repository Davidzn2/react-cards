import React, { Component } from 'react';
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Cards from '../Cards'
import '../styles/base.css' ;

class Perros extends Component {
  render() {
    return (
      <div className="App">
      <Header />
        <h1>Algunos de los Perros favoritos de todos</h1>
        <div className="cards">
          <Cards 
            name="Scooby Doo"
            urlFoto="https://static.comicvine.com/uploads/scale_small/11/111746/4579604-characterart-scooby-sd.jpg"
            description="lorem ipsum"
          />
          <Cards 
            name="Snoopy"
            urlFoto="https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Snoopy_Peanuts.png/200px-Snoopy_Peanuts.png"
            description="lorem ipsum"
          />
          <Cards 
            name="Ayudante de Santa"
            urlFoto="https://i.pinimg.com/originals/bd/90/99/bd9099e92a943c2305524b4285ded76b.png"
            description="lorem ipsum"
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Perros;
