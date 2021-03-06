import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

const { Provider, Consumer } = React.createContext();

class ProductProvider extends React.Component {
    state = {
        paginatedProducts: {
            items: [],
            itemsPerPage: 4,
            totalPages: 0,
            page: 1,
        },
        productDetail: {},
    };

    getProducts = async (page = 0) => {
        const { itemsPerPage } = this.state.paginatedProducts;
        const paginated = await api.getProducts(itemsPerPage, page - 1);

        this.setState({
            paginatedProducts: {
                items: paginated.content,
                itemsPerPage: paginated.size,
                totalPages: paginated.totalPages,
                page: paginated.number + 1,
            },
        });
    }

    getProductDetailById = async (id) => {
        const productDetail = await api.getProductDetailById(id);
        this.setState({ productDetail });
    }

    clearProducts = () => {
        this.setState({
            paginatedProducts: {
                items: [],
                itemsPerPage: 4,
                totalPages: 0,
                page: 1,
            },
        });
    }

    clearProductDetail = () => {
        this.setState({
            productDetail: {},
        });
    }

    render() {
        const { children } = this.props;
        const { paginatedProducts, productDetail } = this.state;

        return (
            <Provider
                value={{
                    getProducts: this.getProducts,
                    getProduct: this.getProductDetailById,
                    clearProduct: this.clearProductDetail,
                    clearProducts: this.clearProducts,
                    paginatedProducts,
                    product: productDetail,
                }}
            >
                {children}
            </Provider>
        );
    }
}

ProductProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { ProductProvider, Consumer as ProductConsumer };
