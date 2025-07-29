import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="app-footer">
            <p>&copy; {new Date().getFullYear()} ShopStack. All rights reserved.</p>
        </footer>
    );
};

export default Footer;