import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { AppProvider } from './contexts/AppContext';
import Home from './screens/Home';
import Products from './screens/Products';
import ProductDetail from './screens/ProductDetail';

function App() {
    return (
        <AppProvider>
            <Router>
                <div className="container ">
                    <NavBar />

                    <div className="section">
                        <Route path="/" exact component={Home} />
                        <Route path="/products" exact component={Products} />
                        <Route path="/products/:id" exact component={ProductDetail} />
                    </div>
                </div>
            </Router>
        </AppProvider>
    );
}

export default App;
