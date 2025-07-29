import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/api'; // You will need to create this API function
import { useCart } from '../context/CartContext';
import './ProductDetailPage.css';

const ProductDetailPage = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                // For this to work, your backend needs an endpoint like /api/products/{id}
                // For now, we'll mock the behavior.
                const mockProducts = [
                    {id: 1, name: "Classic Tee", description: "A comfortable, classic t-shirt made from 100% premium cotton. Perfect for everyday wear.", price: 19.99, imageUrl: "https://placehold.co/600x400/EEE/31343C?text=T-Shirt"},
                    {id: 2, name: "Denim Jeans", description: "Stylish and durable denim jeans with a modern fit. Made to last.", price: 49.99, imageUrl: "https://placehold.co/600x400/EEE/31343C?text=Jeans"},
                    {id: 3, name: "Running Shoes", description: "Lightweight and breathable shoes designed for running and athletic activities.", price: 79.99, imageUrl: "https://placehold.co/600x400/EEE/31343C?text=Shoes"}
                ];
                const foundProduct = mockProducts.find(p => p.id.toString() === id);
                if (foundProduct) {
                    setProduct(foundProduct);
                } else {
                    setError('Product not found.');
                }
            } catch (err) {
                setError('Failed to fetch product details.');
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) return <p className="status-message">Loading product...</p>;
    if (error) return <p className="status-message error">{error}</p>;

    return (
        <div className="product-detail-container">
            <img src={product.imageUrl} alt={product.name} className="product-detail-image" />
            <div className="product-detail-info">
                <h1 className="product-detail-name">{product.name}</h1>
                <p className="product-detail-description">{product.description}</p>
                <p className="product-detail-price">${product.price.toFixed(2)}</p>
                <button onClick={() => addToCart(product)} className="add-to-cart-btn-detail">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductDetailPage;
