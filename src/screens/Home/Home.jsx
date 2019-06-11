import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <section className="hero">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        Animal Shop
                    </h1>
                    <h2 className="subtitle">
                        Navigate to <Link to="products">Products</Link> page to list available products.
                    </h2>
                </div>
            </div>
        </section>

    );
}
