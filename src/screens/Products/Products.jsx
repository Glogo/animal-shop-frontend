import React from 'react';
import PropTypes from 'prop-types';
import qs from 'query-string';
import { ProductConsumer } from '../../contexts/ProductContext';
import Pagination from '../../components/Pagination';
import Product from '../../components/Product';

export class ProductsComponent extends React.Component {
    componentDidMount() {
        const query = qs.parse(this.props.location.search);
        this.props.getProducts(query.page);
    }

    componentWillReceiveProps(props) {
        if (this.props.location.search !== props.location.search) {
            const query = qs.parse(props.location.search);
            props.getProducts(query.page);
        }
    }

    componentWillUnmount() {
        this.props.clearProducts();
    }

    render() {
        const {
            items, itemsPerPage, totalPages, page,
        } = this.props.paginatedProducts;

        return (
            <section className="section">
                <h2 className="title is-4">Products</h2>

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
            </section>
        );
    }
}

ProductsComponent.propTypes = {
    getProducts: PropTypes.func.isRequired,
    clearProducts: PropTypes.func.isRequired,
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
    <ProductConsumer>
        {({ getProducts, clearProducts, paginatedProducts }) => (
            <ProductsComponent
                {...props}
                getProducts={getProducts}
                clearProducts={clearProducts}
                paginatedProducts={paginatedProducts}
            />
        )}
    </ProductConsumer>
);
