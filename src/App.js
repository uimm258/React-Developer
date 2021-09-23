import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import MainRoute from './MainRoute/MainRoute';
import Navigator from './Navigator/Navigator';
import Footer from './Footer/Footer';
import PortfolioRoute from './PortfolioRoute/PortfolioRoute';
import Contact from './MainRoute/MainBody/Contact';

function App() {
  return (
    <div>
      <Navigator />

      <Route path="/" component={MainRoute} exact /> 

      <Route path="/portfolio" component={PortfolioRoute} exact/>
      <Route path="/contact" component={Contact} exact />

      <Footer />
    </div>
  )
};

export default App;