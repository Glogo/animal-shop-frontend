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

export async function createOrder(productId, productCount) {
    const result = await axios.post('/api/orders', {
        productId,
        productCount,
    });
    return result.data;
}

export function getOrders() {
    return axios.get('/api/orders');
}
