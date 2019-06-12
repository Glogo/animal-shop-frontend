import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { OrderConsumer } from '../../contexts/OrderContext';

export class OrdersComponent extends React.Component {
    componentWillMount() {
        this.props.getOrders();
    }

    render() {
        return (
            <section className="section">
                <h2 className="title is-4">Orders</h2>

                <table className="table is-fullwidth is-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product</th>
                            <th>Product count</th>
                            <th>Price per item</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.orders.map(order => (
                            <tr key={order.id}>
                                <th>{order.id}</th>
                                <td><Link to={`/products/${order.product.id}`}>{order.product.name}</Link></td>
                                <td>{order.productCount}</td>
                                <td>{order.product.price}</td>
                                <td>{order.totalPrice}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </section>
        );
    }
}

OrdersComponent.propTypes = {
    getOrders: PropTypes.func.isRequired,
    orders: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default props => (
    <OrderConsumer>
        {({
            getOrders,
            orders,
        }) => (

            <OrdersComponent
                {...props}
                getOrders={getOrders}
                orders={orders}
            />
        )}
    </OrderConsumer>
);
