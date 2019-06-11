import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AppConsumer } from '../../contexts/AppContext';
import './ProductDetail.css';

export class ProductDetailComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            orderCount: 1,
        };
    }

    componentWillMount() {
        const { id } = this.props.match.params;
        this.props.getProduct(id);
    }

    componentWillUnmount() {
        this.props.clearProduct();
    }

    onOrderCountChange = (e) => {
        if (e.target.value >= 0) {
            this.setState({
                orderCount: e.target.value,
            });
        }
    }

    createOrder = (e) => {
        e.preventDefault();
        this.props.createOrder(this.props.id, this.state.orderCount);
    }

    render() {
        if (!this.props.id) {
            return null;
        }

        return (
            <section className="section product-detail" key={this.props.id}>
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

                        <form className="order-action" onSubmit={this.createOrder}>
                            <div className="field has-addons">
                                <p className="control">
                                    <input
                                        className="input"
                                        type="number"
                                        min="1"
                                        required
                                        value={this.state.orderCount}
                                        onChange={this.onOrderCountChange}
                                    />
                                </p>
                                <p className="control">
                                    <button type="submit" className="button is-primary">Order</button>
                                </p>
                            </div>
                        </form>

                    </div>
                </div>

            </section>
        );
    }
}

ProductDetailComponent.propTypes = {
    getProduct: PropTypes.func.isRequired,
    clearProduct: PropTypes.func.isRequired,
    createOrder: PropTypes.func.isRequired,
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    thumbnail: PropTypes.string,
    match: PropTypes.shape({
        params: PropTypes.object.isRequired,
    }).isRequired,
};

ProductDetailComponent.defaultProps = {
    id: 0,
    name: '',
    price: 0,
    description: '',
    thumbnail: '',
};

export default props => (
    <AppConsumer>
        {({
            getProduct,
            product,
            clearProduct,
            createOrder,
        }) => (
            <ProductDetailComponent
                {...props}
                getProduct={getProduct}
                clearProduct={clearProduct}
                createOrder={createOrder}
                id={product.id}
                name={product.name}
                price={product.price}
                description={product.description}
                thumbnail={product.thumbnail}
            />
        )}
    </AppConsumer>
);
