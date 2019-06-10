import React from 'react';
import PropTypes from 'prop-types';
import './Product.css';

export default function Product({
    id, name, price, thumbnail,
}) {
    return (
        <div className="column is-one-quarter">
            <div className="product card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={`/api/images/${thumbnail}`} alt={name} />
                    </figure>
                </div>
                <div className="card-content">
                    <h3 className="is-size-5">{name}</h3>
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
