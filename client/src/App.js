import React from 'react';
import BasicLayout from './containers/BasicLayout';
import './App.css';
import HomePage from './containers/HomePage';
import ProductsPage from './containers/ProductsPage';
import CartPage from './containers/CartPage';
import AboutPage from './containers/AboutPage';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
      <BasicLayout>   
        <Route exact path="/" component={HomePage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/about" component={AboutPage}></Route>
        {/* <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} /> */}
      </BasicLayout>
    </div>
    </Router>
  );
}

export default App;
