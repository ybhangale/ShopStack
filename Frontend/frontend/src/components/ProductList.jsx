import React, { useState, useEffect } from 'react';
import { getProducts } from '../services/api';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getProducts();
                setProducts(response.data);
            } catch (err) {
                setError('Failed to fetch products. Is the backend server running?');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if (loading) return <p className="status-message">Loading products...</p>;
    if (error) return <p className="status-message error">{error}</p>;

    return (
        <div className="product-grid">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList; 