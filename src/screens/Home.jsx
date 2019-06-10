import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <p>Welcome to Animal Shop.</p>
            <p>
                Navigate to <Link to="products">Products</Link> page to list available products.
            </p>
        </div>
    );
}
