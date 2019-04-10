import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Gatos from './pages/Gatos';
import Perros from './pages/Perros'

function Routes (){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} /> 
                <Route exact path="/gatos" component={Gatos} />
                <Route exact path="/perros" component={Perros} />
            </Switch>
        </BrowserRouter>
        
    )
}
export default Routes;