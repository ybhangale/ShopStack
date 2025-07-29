import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './CartPage.css';

const CartPage = () => {
    const { cartItems, removeFromCart, addToCart } = useCart();

    const totalCost = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (cartItems.length === 0) {
        return (
            <div className="cart-page">
                <h1 className="page-title">Your Shopping Cart</h1>
                <div className="cart-empty">
                    <p>Your cart is currently empty.</p>
                    <Link to="/" className="btn-primary">Continue Shopping</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <h1 className="page-title">Your Shopping Cart</h1>
            <div className="cart-container">
                <div className="cart-items">
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h2 className="cart-item-name">{item.name}</h2>
                                <p className="cart-item-price">${item.price.toFixed(2)}</p>
                                <div className="cart-item-quantity">
                                    <span>Quantity: {item.quantity}</span>
                                </div>
                            </div>
                            <button onClick={() => removeFromCart(item.id)} className="cart-item-remove">
                                &times;
                            </button>
                        </div>
                    ))}
                </div>
                <div className="cart-summary">
                    <h2 className="summary-title">Order Summary</h2>
                    <div className="summary-total">
                        <span>Total</span>
                        <span>${totalCost.toFixed(2)}</span>
                    </div>
                    <button className="btn-checkout">Proceed to Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;