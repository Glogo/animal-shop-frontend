import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

const { Provider, Consumer } = React.createContext();

class OrderProvider extends React.Component {
    state = {
        orders: [],
    };

    createOrder = (productId, productCount) => api.createOrder(productId, productCount)

    getOrders = async () => {
        const orders = await api.getOrders();
        this.setState({ orders });
    }

    render() {
        const { children } = this.props;
        const { orders } = this.state;

        return (
            <Provider
                value={{
                    createOrder: this.createOrder,
                    getOrders: this.getOrders,
                    orders,
                }}
            >
                {children}
            </Provider>
        );
    }
}

OrderProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { OrderProvider, Consumer as OrderConsumer };
