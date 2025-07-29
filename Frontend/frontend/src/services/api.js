import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getProducts = () => {
    return apiClient.get('/products');
};

// We'll assume a new backend endpoint for fetching a single product
export const getProductById = (id) => {
    // In your Spring Boot backend, you would create a method like:
    // @GetMapping("/products/{id}")
    // public Product getProductById(@PathVariable Long id) { ... }
    return apiClient.get(`/products/${id}`);
};