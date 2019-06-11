import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AppConsumer } from '../../contexts/AppContext';
import './ProductDetail.css';

export class ProductDetailComponent extends React.Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getProduct(id);
    }

    render() {
        return (
            <section className="section product-detail">
                <nav className="breadcrumb" aria-label="breadcrumbs">
                    <ul>
                        <li><Link to="/products">Products</Link></li>
                        <li className="is-active"><Link to="/products">{this.props.name}</Link></li>
                    </ul>
                </nav>
                <h2 className="title is-4">{this.props.name}</h2>
                <div className="columns">
                    <div className="column is-one-quarter">
                        <figure className="image is-square">
                            <img src={`/api/images/${this.props.thumbnail}`} alt={this.props.name} />
                        </figure>
                    </div>
                    <div className="column">
                        <p>{this.props.description}</p>
                        <p className="price has-text-black is-size-5">{this.props.price} €</p>
                    </div>
                </div>

            </section>
        );
    }
}

ProductDetailComponent.propTypes = {
    getProduct: PropTypes.func.isRequired,
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    thumbnail: PropTypes.string,
    match: PropTypes.shape({
        params: PropTypes.object.isRequired,
    }).isRequired,
};

export default props => (
    <AppConsumer>
        {({ getProduct, product }) => (
            <ProductDetailComponent
                {...props}
                getProduct={getProduct}
                id={product.id}
                name={product.name}
                price={product.price}
                description={product.description}
                thumbnail={product.thumbnail}
            />
        )}
    </AppConsumer>
);
