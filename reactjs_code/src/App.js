import React, { Component }  from 'react';
import './css/telerikCssBootstrap/all.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { Landing } from "./components/layouts/landing";
import 'bootstrap/dist/css/bootstrap.min.css';
import apartmentGrid from "./components/qrHash/qrHashGrid/qrHashGrid";

import addNewApartment from "./components/qrHash/addNewQRHash/addQRHash";

// import ApartmentDetails from './'
class App extends Component{

  render(){
    
    return (
      <div className="App">
      <Router>
        <div className="landing">
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/qr_hash/grid' component={apartmentGrid} />
            <Route exact path='/qr_hash/grid/add' component={addNewApartment} />
          </Switch>
        </div>
      </Router>
    </div >
  );
  }
}

export default App;