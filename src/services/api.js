import axios from 'axios';

export async function getProducts(size, page) {
    const result = await axios.get('/api/products', {
        params: {
            size,
            page,
        },
    });
    return result.data;
}

export async function getProductDetailById(id) {
    const result = await axios.get(`/api/products/${id}`);
    return result.data;
}

export async function createOrder(order) {
    const result = await axios.post('/api/orders', order);
    return result.data;
}
