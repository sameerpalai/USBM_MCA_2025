import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { CartProvider } from './cartContext';
import ProductList from './roductList';
import Cart from './cart';
import './App.css';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <header>
            <h1>Shopping Cart</h1>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/cart">Cart</Link>
            </nav>
          </header>

          <Switch>
            <Route path="/" exact component={ProductList} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
