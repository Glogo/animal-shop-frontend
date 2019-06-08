import React from 'react';
import PropTypes from 'prop-types';
// import { getProducts } from '../services/animals-api';

const { Provider, Consumer } = React.createContext();

class AppProvider extends React.Component {
    state = {
        products: [],
    };

    searchProducts = () => {
        console.log('searching products');

        // TODO call the service
        this.setState({
            products: [
                {
                    id: 1,
                    name: 'Dog food',
                },
            ],
        });
    }

    render() {
        const { children } = this.props;
        const { products } = this.state;

        return (
            <Provider
                value={{
                    searchProducts: this.searchProducts,
                    products,
                }}
            >
                {children}
            </Provider>
        );
    }
}

AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { AppProvider, Consumer as AppConsumer };
