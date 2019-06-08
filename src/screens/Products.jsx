import React from 'react';
import PropTypes from 'prop-types';
import { AppConsumer } from '../contexts/AppContext';

export class ProductsComponent extends React.Component {
    componentDidMount() {
        this.props.searchProducts();
    }

    render() {
        return (
            <div>
                Products, count:
                {this.props.products.length}
            </div>
        );
    }
}

ProductsComponent.propTypes = {
    searchProducts: PropTypes.func.isRequired,
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default props => (
    <AppConsumer>
        {({ searchProducts, products }) => (
            <ProductsComponent {...props} searchProducts={searchProducts} products={products} />
        )}
    </AppConsumer>
);
