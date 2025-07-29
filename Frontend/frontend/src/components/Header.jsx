import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Header.css';

const Header = () => {
    const { cartItems } = useCart();
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <header className="app-header">
            <div className="header-container">
                <Link to="/" className="logo">ShopStack</Link>
                <nav>
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/cart" className="nav-link cart-link">
                        Cart 
                        {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;