import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import RentalComponent from './components/pages/RentalComponent';
import SaleComponent from './components/pages/SaleComponent';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <div></div>
          </Route>
          <Route exact path="/rental">
            <RentalComponent />
          </Route>
          <Route exact path="/sale">
            <SaleComponent />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
