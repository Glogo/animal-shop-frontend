import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Product.css';

export default function Product({
    id, name, price, thumbnail,
}) {
    return (
        <div className="product column is-one-quarter">
            <div className="card">
                <div className="card-image">
                    <figure className="image is-1by1">
                        <img src={`/api/images/${thumbnail}`} alt={name} />
                    </figure>
                </div>
                <div className="card-content">
                    <h3 className="is-size-5">
                        <Link to={`/products/${id}`}>{name}</Link>
                    </h3>
                </div>
                <div className="product-price is-size-5">
                    {price} €
                </div>
            </div>
        </div>
    );
}

Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
};
