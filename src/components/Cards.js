import React, { Component } from 'react';
import './styles/cards.css'

class Card extends Component {
   handleClick = () =>{
    alert('Miau')
   }
  render() {
    return (
    <div className="card col-sm-12 col-md-4"  >
        <img className="card-img-top" src={this.props.urlFoto} alt="Card cap"/>
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text">{this.props.description}</p>
          <button onClick={this.handleClick} href="#" className="btn btn-primary">Click for miau</button>

        </div>
      </div> 
    );
  }
}

export default Card;
