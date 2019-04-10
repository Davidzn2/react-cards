import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Header extends Component {
  render() {
    return (
        <div className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Inicio</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/perros">Perros</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/gatos">Gatos</Link>
                </li> 
                </ul>   
            </div>
        </div>
    );
  }
}

export default Header;
