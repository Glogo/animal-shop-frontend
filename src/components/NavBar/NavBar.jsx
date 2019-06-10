import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <h1 className="navbar-item is-size-6">
                    <Link to="/" className="has-text-black">Animal Shop</Link>
                </h1>
            </div>

            <div className="navbar-start">
                <Link to="/products" className="navbar-item">Products</Link>
                <Link to="/orders" className="navbar-item">Orders</Link>
            </div>
        </nav>
    );
}
