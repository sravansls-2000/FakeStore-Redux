import React from 'react';
import './App.css';
import Header from './Components/Header/header';
import ProductDetails from './Components/products/productDetails';
import ProductListing from './Components/products/productListing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/products/:productID" exact component={ProductDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
