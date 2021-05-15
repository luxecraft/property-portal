import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import RentalComponent from "./components/pages/RentalComponent";
import SaleComponent from "./components/pages/SaleComponent";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import PropertyDetailsComponent from "./components/pages/PropertyDetailsComponent";

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/rental">
            <RentalComponent />
          </Route>
          <Route exact path="/sale">
            <SaleComponent />
          </Route>
          <Route path="/property-details" render={(props) => <PropertyDetailsComponent {...props} />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
