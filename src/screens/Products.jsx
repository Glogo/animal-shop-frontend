import React from 'react';
import PropTypes from 'prop-types';
import qs from 'query-string';
import { AppConsumer } from '../contexts/AppContext';
import Pagination from '../components/Pagination';
import Product from '../components/Product';

export class ProductsComponent extends React.Component {
    componentDidMount() {
        const query = qs.parse(this.props.location.search);
        this.props.getProducts(query.page);
    }

    render() {
        const {
            items, itemsPerPage, totalPages, page,
        } = this.props.paginatedProducts;

        return (
            <div>
                <h2 className="is-size-4">Products</h2>

                <div className="columns is-multiline">
                    {items.map(product => (
                        <Product
                            id={product.id}
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            thumbnail={product.thumbnail}
                        />
                    ))}
                </div>

                <Pagination
                    itemsPerPage={itemsPerPage}
                    totalPages={totalPages}
                    page={page}
                />
            </div>
        );
    }
}

ProductsComponent.propTypes = {
    getProducts: PropTypes.func.isRequired,
    paginatedProducts: PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.object),
        itemsPerPage: PropTypes.number.isRequired,
        totalPages: PropTypes.number.isRequired,
        page: PropTypes.number.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        search: PropTypes.string.isRequired,
    }).isRequired,
};

export default props => (
    <AppConsumer>
        {({ getProducts, paginatedProducts }) => (
            <ProductsComponent
                {...props}
                getProducts={getProducts}
                paginatedProducts={paginatedProducts}
            />
        )}
    </AppConsumer>
);
