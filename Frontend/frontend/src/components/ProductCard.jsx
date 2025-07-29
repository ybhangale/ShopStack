import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="product-card">
            <Link to={`/product/${product.id}`}>
                <img src={product.imageUrl} alt={product.name} className="product-image" />
            </Link>
            <div className="product-info">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <button onClick={() => addToCart(product)} className="add-to-cart-btn">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;