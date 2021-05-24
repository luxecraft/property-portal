import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import RentalComponent from "./components/pages/RentalComponent";
import SaleComponent from "./components/pages/SaleComponent";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import PropertyDetailsComponent from "./components/pages/PropertyDetailsComponent";
import { AnimatedSwitch } from 'react-router-transition';
import '@progress/kendo-theme-bootstrap/dist/all.css';
import ContactUs from "./components/pages/ContactUs";
require('dotenv').config()

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/rental">
            <RentalComponent />
          </Route>
          <Route exact path="/sale">
            <SaleComponent />
          </Route>
          <Route exact path="/contact">
            <ContactUs />
          </Route>
          <Route path="/property-details" render={(props) => <PropertyDetailsComponent {...props} />} />
        </AnimatedSwitch>
        <Footer />
      </Router>
    </div>
  );
}
