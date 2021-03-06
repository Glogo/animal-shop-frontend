import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { ProductProvider } from './contexts/ProductContext';
import { OrderProvider } from './contexts/OrderContext';

import Home from './screens/Home';
import Products from './screens/Products';
import ProductDetail from './screens/ProductDetail';
import Orders from './screens/Orders';

function App() {
    return (
        <ProductProvider>
            <OrderProvider>
                <Router>
                    <div className="container ">
                        <NavBar />

                        <Route path="/" exact component={Home} />
                        <Route path="/products" exact component={Products} />
                        <Route path="/products/:id" exact component={ProductDetail} />
                        <Route path="/orders" exact component={Orders} />
                    </div>
                </Router>
            </OrderProvider>
        </ProductProvider>
    );
}

export default App;
